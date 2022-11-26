import type { MarkupPreprocessor, Preprocessor, PreprocessorGroup } from 'svelte/types/compiler/preprocess';
import type { PreprocessorOptions } from './interfaces/preprocess-options.interface';
import { processOptions } from './utilities';

export function preprocess(options?: PreprocessorOptions) {
    processOptions(options);

    const markup: MarkupPreprocessor = ({ content }) => {
        return { code: content };
    };

    const style: Preprocessor = ({ content }) => {
        return { code: content };
    };

    return { markup, style } as PreprocessorGroup;
}
