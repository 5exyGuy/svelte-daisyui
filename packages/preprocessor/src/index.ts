import type { PreprocessorGroup } from 'svelte/types/compiler/preprocess';
import { SCRIPT_REGEX, STYLE_REGEX, SVELTE_COMMENT_REGEX } from './constants';
import type { PreprocessorOptions } from './interfaces/preprocess-options.interface';

export function preprocess({}: PreprocessorOptions): PreprocessorGroup {
    return {
        markup: ({ content }) => {
            const code = content.replace(SCRIPT_REGEX, '').replace(STYLE_REGEX, '').replace(SVELTE_COMMENT_REGEX, '');
            const styleMatch = content.match(STYLE_REGEX);
            const styleAttributes = (styleMatch ? (styleMatch[1] as string) : '')
                .split(/s+/)
                .filter(Boolean)
                .reduce((acc, attr) => {
                    const [name, value] = attr.split('=') as [string, string];
                    acc[name] = value.replace(/['"]/g, '');
                    return acc;
                }, {} as Record<string, string>);
            const styleContent = styleMatch ? (styleMatch[2] as string) : '';

            return { code: content };
        },
    };
}
