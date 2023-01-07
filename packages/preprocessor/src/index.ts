import type { Preprocessor, PreprocessorGroup } from 'svelte/types/compiler/preprocess';
import { createStyleBuilder } from './builders';
import type { PreprocessorOptions } from './interfaces/preprocess-options';
import type { StyleBuilder } from './interfaces/style-builder';
import { findImportStatement } from './markup/find-import-statments';
import { processOptions } from './options/process-options';
import { writeFileSync } from 'fs';
import { relative } from 'path';
import { parseHtml } from './markup';
import MagicString from 'magic-string';

export function daisyuiPreprocess(options?: Partial<PreprocessorOptions>) {
    const processedOptions = processOptions(options);
    const styleBuilders = new Map<string, StyleBuilder>();

    let currentGeneratedStyles = '';

    const generateStyles = (componentImportAliases: Array<[string, Set<string>]>, content: string) => {
        return componentImportAliases.reduce((prevValue, [componentName, aliases]) => {
            const styleBuilder =
                styleBuilders.get(componentName) ?? createStyleBuilder(processedOptions, componentName)!;
            styleBuilders.has(componentName) || styleBuilders.set(componentName, styleBuilder);

            return prevValue + styleBuilder.build([...aliases], content);
        }, '');
    };

    const script: Preprocessor = ({ content, filename, markup }) => {
        const componentImportAliases = findImportStatement(processedOptions.modulePath, content, filename);
        if (componentImportAliases.size === 0) return { code: content };

        const htmlMarkup = parseHtml(markup);
        currentGeneratedStyles = generateStyles([...componentImportAliases], htmlMarkup);
        return { code: content };
    };

    const style: Preprocessor = ({ content, attributes, filename }) => {
        const output = new MagicString(content, filename ? { filename } : undefined);

        if (typeof attributes['src'] === 'string' && filename) {
            const pathToStyles = relative(filename, attributes['src']);
            output.append(currentGeneratedStyles);
            const outputString = output.toString();
            writeFileSync(pathToStyles, outputString);
            return { code: outputString, map: output.generateMap() };
        }

        output.append(currentGeneratedStyles);
        const outputString = output.toString();
        return { code: outputString, map: output.generateMap() };
    };

    return { script, style } as PreprocessorGroup;
}
