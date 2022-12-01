import type { MarkupPreprocessor, PreprocessorGroup } from 'svelte/types/compiler/preprocess';
import type { PreprocessorOptions } from './interfaces/preprocess-options.interface';
import { findComponentImports, getSvelteStyle, prepareStyleBuilders, processOptions } from './utilities';

export function preprocess(options?: Partial<PreprocessorOptions>) {
    const processedOptions = processOptions(options);
    const styleBuilders = prepareStyleBuilders(processedOptions);

    const markup: MarkupPreprocessor = ({ content, filename }) => {
        const style = getSvelteStyle(content);
        if (style) return { code: content };

        const componentImportAliases = findComponentImports(content, filename);
        if (componentImportAliases.size === 0) return { code: content };

        return { code: content };
    };

    return { markup } as PreprocessorGroup;
}
