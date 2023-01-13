import type { MarkupPreprocessor, PreprocessorGroup } from 'svelte/types/compiler/preprocess';
// import { createStyleBuilder } from './builders';
import { findImportStatement, parseHtml, parseScript } from './markup';
// import { main } from '../package.json';
// import { findStylesPackage } from './utilities';
import { processOptions } from './options';
import type { PreprocessorOptions } from './interfaces';
import MagicString from 'magic-string';
// import { compileGeneratedStyles } from './compiler/compile-generated-styles';

export function daisyuiPreprocess(options?: Partial<PreprocessorOptions>) {
    const processedOptions = processOptions(options);
    // const styleBuilders = new Map<string, StyleBuilder>();
    // const pathToStylesPackage = processedOptions?.dev?.stylesPath ?? findStylesPackage(main);

    const markup: MarkupPreprocessor = ({ content, filename }) => {
        const output = new MagicString(content, filename ? { filename } : undefined);
        const script = parseScript(content);
        const aliases = findImportStatement(
            processedOptions.dev.componentLibPath,
            filename,
            script.instance?.content,
            script.module?.content,
        );
        if (aliases.size === 0) return { code: output.toString(), map: output.generateMap() };

        const html = parseHtml(content);
        for (const t of html?.children ?? []) {
            console.log(t.attributes);
        }
        // const sassGeneratedStyles = Array.from(aliases.entries()).reduce((prevValue, [componentName, aliases]) => {
        //     const styleBuilder =
        //         styleBuilders.get(componentName) ?? createStyleBuilder(processedOptions, componentName)!;
        //     styleBuilders.has(componentName) || styleBuilders.set(componentName, styleBuilder);

        //     return prevValue + styleBuilder.build([...aliases], content);
        // }, '');

        // const css = compileGeneratedStyles(sassGeneratedStyles, pathToStylesPackage);

        // const style = parseStyle(content);
        // if (!style) {
        //     output.append(`\n<style>${css}</style>`);
        //     return { code: output.toString(), map: output.generateMap() };
        // }

        // output.appendLeft(style!.contentEndIndex, css);

        return { code: output.toString(), map: output.generateMap() };
    };

    return { markup } as PreprocessorGroup;
}
