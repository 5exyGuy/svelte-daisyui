import type { MarkupPreprocessor, Preprocessor, PreprocessorGroup } from 'svelte/types/compiler/preprocess';
import type { PreprocessorOptions } from './interfaces/preprocess-options.interface';
import { getSvelteStyle, processOptions } from './utilities';
import { findComponentImports } from './utilities/find-component-imports.utility';

export function preprocess(options?: Partial<PreprocessorOptions>) {
    processOptions(options);

    const markup: MarkupPreprocessor = ({ content, filename }) => {
        const style = getSvelteStyle(content);
        if (style) return { code: content };

        const componentImports = findComponentImports(content, filename);
        if (componentImports.size === 0) return { code: content };

        return { code: content };
    };

    return { markup } as PreprocessorGroup;
}
