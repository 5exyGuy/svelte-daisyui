import type { MarkupPreprocessor, PreprocessorGroup } from 'svelte/types/compiler/preprocess';
import { createStyleBuilder } from './builders';
import { findImportStatement, parseHtml, parseScript, parseStyle } from './markup';
import { main } from '../package.json';
import { findStylesPackage } from './utilities';
import { processOptions } from './options';
import type { PreprocessorOptions, StyleBuilder } from './interfaces';
import MagicString from 'magic-string';
import { compileGeneratedStyles } from './compiler/compile-generated-styles';
import { parse } from 'svelte/compiler';

export function daisyuiPreprocess(options?: Partial<PreprocessorOptions>) {
    const processedOptions = processOptions(options);
    const styleBuilders = new Map<string, StyleBuilder>();
    const pathToStylesPackage = processedOptions?.dev?.stylesPath ?? findStylesPackage(main);

    const generateStyles = (componentImportAliases: Map<string, Set<string>>, content: string) => {
        const sassGeneratedStyles = Array.from(componentImportAliases.entries()).reduce(
            (prevValue, [componentName, aliases]) => {
                const styleBuilder =
                    styleBuilders.get(componentName) ?? createStyleBuilder(processedOptions, componentName)!;
                styleBuilders.has(componentName) || styleBuilders.set(componentName, styleBuilder);

                return prevValue + styleBuilder.build([...aliases], content);
            },
            '',
        );

        return compileGeneratedStyles(sassGeneratedStyles, pathToStylesPackage);
    };

    const markup: MarkupPreprocessor = ({ content, filename }) => {
        const output = new MagicString(content, filename ? { filename } : undefined);

        const script = parseScript(content);
        if (!script.instance && !script.module) return { code: output.toString(), map: output.generateMap() };

        const aliases = findImportStatement(processedOptions.dev.componentLibPath, script.instance, filename);
        if (componentImportAliases.size === 0) return { code: output.toString(), map: output.generateMap() };

        const html = parseHtml(content);
        const test = parse(html);
        console.log(test.html.children);
        const css = generateStyles(componentImportAliases, html);

        const style = parseStyle(content);
        if (!style) {
            output.append(`\n<style>${css}</style>`);
            return { code: output.toString(), map: output.generateMap() };
        }

        output.appendLeft(style!.contentEndIndex, css);

        return { code: output.toString(), map: output.generateMap() };
    };

    return { markup } as PreprocessorGroup;
}
