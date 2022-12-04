import type { MarkupPreprocessor, PreprocessorGroup } from 'svelte/types/compiler/preprocess';
import { createStyleBuilder } from './builders';
import type { PreprocessorOptions, StyleBuilder } from './interfaces';
import { findComponentImports, getSvelteStyle, processOptions } from './utilities';

export function preprocess(options?: Partial<PreprocessorOptions>) {
    const processedOptions = processOptions(options);
    const styleBuilders = new Map<string, StyleBuilder>();

    const markup: MarkupPreprocessor = ({ content, filename }) => {
        const style = getSvelteStyle(content);
        if (style) return { code: content };

        const componentImportAliases = findComponentImports(content, filename);
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
