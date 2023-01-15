import type { MarkupPreprocessor, PreprocessorGroup } from 'svelte/types/compiler/preprocess';
import { buildComponentSassStyles } from './builders';
import { appendCssToStyles, findImportStatement, parseHtml, parseScript, parseStyle } from './markup';
import { main } from '../package.json';
import { findStylesPackage, generateOutput } from './utilities';
import { processOptions } from './options';
import type { PreprocessorOptions, StyleBuilder } from './interfaces';
import { compileSass } from './compiler';
import MagicString from 'magic-string';

export function daisyuiPreprocess(options?: Partial<PreprocessorOptions>) {
    // Processes options and returns processed options
    const processedOptions = processOptions(options);
    // Creates a map of style builders for each component for caching purposes
    const styleBuilders = new Map<string, StyleBuilder>();
    // Finds path to @svelte-daisyui/styles package
    const pathToStylesPackage = processedOptions?.dev?.stylesPath ?? findStylesPackage(main);

    const markup: MarkupPreprocessor = ({ content, filename }) => {
        // Creates a magic string for output
        const output = new MagicString(content, { filename });
        // Parses script and finds import statements for daisyui components.
        // If no component imports are found, returns original content without any changes.
        const script = parseScript(content);
        const aliases = findImportStatement(processedOptions, script, filename);
        if (aliases.size === 0) return generateOutput(output);
        // Parses html and finds daisyui components and their props
        const html = parseHtml(content);
        // Builds sass styles for daisyui components
        const componentSassStyles = buildComponentSassStyles(processedOptions, styleBuilders, aliases, html);
        // Compiles generated sass styles to css
        const css = compileSass(componentSassStyles, pathToStylesPackage);
        // Parses style and appends generated css to it
        const style = parseStyle(content);
        appendCssToStyles(output, style, css);
        // Generates output and returns it
        return generateOutput(output);
    };

    return { markup } as PreprocessorGroup;
}
