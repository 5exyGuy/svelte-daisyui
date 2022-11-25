import type { MarkupPreprocessor, Preprocessor, PreprocessorGroup } from 'svelte/types/compiler/preprocess';
import { STYLE_REGEX } from './constants';
import type { PreprocessorOptions } from './interfaces/preprocess-options.interface';
import { ScreenSizeMinWidth } from '@svelte-daisyui/shared';

export function preprocess(options?: PreprocessorOptions) {
    const modifiedOptions = (options as Required<PreprocessorOptions>) ?? {};
    modifiedOptions.includeDefaults = modifiedOptions.includeDefaults ?? false;
    modifiedOptions.screenSizes = modifiedOptions.screenSizes
        ? { ...ScreenSizeMinWidth, ...modifiedOptions.screenSizes }
        : ScreenSizeMinWidth;

    // function getHtmlMarkup(content: string) {
    //     return content.replace(SCRIPT_REGEX, '').replace(STYLE_REGEX, '').replace(SVELTE_COMMENT_REGEX, '');
    // }

    function getStyleMarkup(content: string) {
        const match = content.match(STYLE_REGEX);
        if (!match) return;

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
        // const code = getHtmlMarkup(content);
        const style = getStyleMarkup(content);

        console.log(style);

        // const sassStyles = COMPONENT_STYLE_BUILDERS.reduce(
        //     (prevValue, builder) => prevValue + builder(code, modifiedOptions),
        //     '',
        // );
        // const { css } = compileString(sassStyles);

        // const styleContentWithNewLine = styleContent.endsWith('\n') ? styleContent : styleContent + '\n';
        // const newStyleContent = styleContentWithNewLine + css;

        return { code: content + '<style global></style>' };
    };

    const style: Preprocessor = (input) => {
        console.log(input);
    };

    return { markup, style } as PreprocessorGroup;
}
