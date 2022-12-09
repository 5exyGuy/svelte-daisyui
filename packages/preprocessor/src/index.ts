import type { MarkupPreprocessor, PreprocessorGroup } from 'svelte/types/compiler/preprocess';
import { createStyleBuilder } from './builders';
import type { PreprocessorOptions } from './interfaces/preprocess-options';
import type { StyleBuilder } from './interfaces/style-builder';
import { findImportStatement } from './markup/find-import-statments';
import { parseStyle } from './markup/parse-style';
import { processOptions } from './options/process-options';

export function preprocess(options?: Partial<PreprocessorOptions>) {
    const processedOptions = processOptions(options);
    const styleBuilders = new Map<string, StyleBuilder>();

    const markup: MarkupPreprocessor = ({ content, filename }) => {
        const style = parseStyle(content);
        if (style) return { code: content };

        const componentImportAliases = findImportStatement(content, filename);
        if (componentImportAliases.size === 0) return { code: content };

        const generatedStyles = Object.entries(componentImportAliases).reduce((prevValue, [componentName, aliases]) => {
            const styleBuilder =
                styleBuilders.get(componentName) ?? createStyleBuilder(processedOptions, componentName)!;
            styleBuilders.has(componentName) || styleBuilders.set(componentName, styleBuilder);

            return prevValue + styleBuilder.build(aliases, content);
        }, '');

        return { code: content };
    };

    return { markup } as PreprocessorGroup;
}
