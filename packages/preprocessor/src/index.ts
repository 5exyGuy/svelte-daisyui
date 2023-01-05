import type { MarkupPreprocessor, PreprocessorGroup } from 'svelte/types/compiler/preprocess';
import { createStyleBuilder } from './builders';
import type { PreprocessorOptions } from './interfaces/preprocess-options';
import type { StyleBuilder } from './interfaces/style-builder';
import { findImportStatement } from './markup/find-import-statments';
import { parseStyle } from './markup/parse-style';
import { processOptions } from './options/process-options';

export function daisyuiPreprocess(options?: Partial<PreprocessorOptions>) {
    const processedOptions = processOptions(options);
    const styleBuilders = new Map<string, StyleBuilder>();

    const generateStyles = (componentImportAliases: Array<[string, Set<string>]>, content: string) => {
        return componentImportAliases.reduce((prevValue, [componentName, aliases]) => {
            const styleBuilder =
                styleBuilders.get(componentName) ?? createStyleBuilder(processedOptions, componentName)!;
            styleBuilders.has(componentName) || styleBuilders.set(componentName, styleBuilder);

            return prevValue + styleBuilder.build([...aliases], content);
        }, '');
    };

    const markup: MarkupPreprocessor = ({ content, filename }) => {
        const style = parseStyle(content);

        const componentImportAliases = findImportStatement(processedOptions.modulePath, content, filename);
        if (componentImportAliases.size === 0) return { code: content };

        generateStyles([...componentImportAliases], content);

        return { code: content };
    };

    return { markup } as PreprocessorGroup;
}
