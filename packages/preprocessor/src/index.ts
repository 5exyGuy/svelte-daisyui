import type { MarkupPreprocessor, PreprocessorGroup } from 'svelte/types/compiler/preprocess';
import { buildComponentSassStyles } from './builders';
import { findImportStatement, parseHtml, parseScript, parseStyle } from './markup';
import { main } from '../package.json';
import { findStylesPackage, generateOutput } from './utilities';
import { processOptions } from './options';
import type { PreprocessorOptions, StyleBuilder } from './interfaces';
import { compileSass } from './compiler';
import MagicString from 'magic-string';

export function daisyuiPreprocess(options?: Partial<PreprocessorOptions>) {
    const processedOptions = processOptions(options);
    const styleBuilders = new Map<string, StyleBuilder>();
    const pathToStylesPackage = processedOptions?.dev?.stylesPath ?? findStylesPackage(main);

    const markup: MarkupPreprocessor = ({ content, filename }) => {
        const output = new MagicString(content, { filename });
        const script = parseScript(content);
        const aliases = findImportStatement(processedOptions.dev.componentLibPath, script, filename);
        if (aliases.size === 0) return generateOutput(output);

        const html = parseHtml(content);
        const componentSassStyles = buildComponentSassStyles(processedOptions, styleBuilders, aliases, html);
        const css = compileSass(componentSassStyles, pathToStylesPackage);
        const style = parseStyle(content);

        return generateOutput(output);
    };

    return { markup } as PreprocessorGroup;
}
