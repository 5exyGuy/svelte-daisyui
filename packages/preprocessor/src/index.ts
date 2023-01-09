import type { Preprocessor, PreprocessorGroup } from 'svelte/types/compiler/preprocess';
import { createStyleBuilder } from './builders';
import { findImportStatement, parseHtml } from './markup';
import { main } from '../package.json';
import { findStylesPackage } from './utilities';
import { processOptions } from './options';
import type { PreprocessorOptions, StyleBuilder } from './interfaces';
import sass from 'sass';
import MagicString from 'magic-string';

export function daisyuiPreprocess(options?: Partial<PreprocessorOptions>) {
    const processedOptions = processOptions(options);
    const styleBuilders = new Map<string, StyleBuilder>();
    const pathToStylesPackage = findStylesPackage(main);

    let name = String();
    let css = String();

    const generateStyles = (componentImportAliases: Array<[string, Set<string>]>, content: string) => {
        const sassGeneratedStyles = componentImportAliases.reduce((prevValue, [componentName, aliases]) => {
            const styleBuilder =
                styleBuilders.get(componentName) ?? createStyleBuilder(processedOptions, componentName)!;
            styleBuilders.has(componentName) || styleBuilders.set(componentName, styleBuilder);

            return prevValue + styleBuilder.build([...aliases], content);
        }, '');

        const { css } = sass.compileString(sassGeneratedStyles, {
            style: 'compressed',
            loadPaths: [pathToStylesPackage],
        });

        return css;
    };

    const script: Preprocessor = ({ content, filename, markup }) => {
        const componentImportAliases = findImportStatement(processedOptions.modulePath, content, filename);
        if (componentImportAliases.size === 0) return { code: content };
        const htmlMarkup = parseHtml(markup);
        name = filename ?? String();
        css = generateStyles([...componentImportAliases], htmlMarkup);
        return { code: content };
    };

    const style: Preprocessor = ({ content, filename }) => {
        if (filename !== name) return { code: content };

        const output = new MagicString(content, filename ? { filename } : undefined);
        output.append(css);
        const outputString = output.toString();
        return { code: outputString, map: output.generateMap() };
    };

    return { script, style } as PreprocessorGroup;
}
