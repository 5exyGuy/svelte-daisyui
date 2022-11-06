import type { MarkupPreprocessor, PreprocessorGroup } from 'svelte/types/compiler/preprocess';
import { COMPONENT_STYLE_BUILDERS, SCRIPT_REGEX, STYLE_REGEX, SVELTE_COMMENT_REGEX } from './constants';
import type { PreprocessorOptions } from './interfaces/preprocess-options.interface';
import { compile, compileString } from 'sass';

export function preprocess({ includeDefaults, screenSizes }: PreprocessorOptions) {
    function getHtmlMarkup(content: string) {
        return content.replace(SCRIPT_REGEX, '').replace(STYLE_REGEX, '').replace(SVELTE_COMMENT_REGEX, '');
    }

    function getStyleMarkup(content: string) {
        const match = content.match(STYLE_REGEX);
        const attributes = (match ? (match[1] as string) : '')
            .split(/s+/)
            .filter(Boolean)
            .reduce((acc, attr) => {
                const [name, value] = attr.split('=') as [string, string];
                acc[name] = value.replace(/['"]/g, '');
                return acc;
            }, {} as Record<string, string>);
        const styleContent = match ? (match[2] as string) : '';

        return { attributes, content: styleContent };
    }

    const markup: MarkupPreprocessor = ({ content }) => {
        const code = getHtmlMarkup(content);
        const { attributes: styleAttributes, content: styleContent } = getStyleMarkup(content);

        const sassStyles = COMPONENT_STYLE_BUILDERS.reduce(
            (prevValue, builder) => prevValue + builder(code, screenSizes),
            '',
        );
        const { css } = compileString(sassStyles);

        const styleContentWithNewLine = styleContent.endsWith('\n') ? styleContent : styleContent + '\n';
        const newStyleContent = styleContentWithNewLine + css;

        return { code: content };
    };

    return { markup } as PreprocessorGroup;
}
