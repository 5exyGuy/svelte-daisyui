import type { MarkupPreprocessor, Preprocessor, PreprocessorGroup } from 'svelte/types/compiler/preprocess';
import type { PreprocessorOptions } from './interfaces/preprocess-options.interface';
import { getSvelteScript, getSvelteStyle, processOptions } from './utilities';

export function preprocess(options?: PreprocessorOptions) {
    const processedOptions = processOptions(options);

    const markup: MarkupPreprocessor = ({ content }) => {
        const script = getSvelteScript(content);

        // regex import '@svelte-daisyui/core'

        // const code = getHtmlMarkup(content);
        // const style = getSvelteStyle(content);

        // console.log(style);

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
