import type { HtmlParseResult, PreprocessorOptions, StyleBuilder } from '../interfaces';
import { createStyleBuilder } from './create-style-builder';

export function buildComponentSassStyles(
    options: PreprocessorOptions,
    styleBuilders: Map<string, StyleBuilder>,
    componentAliases: Map<string, Set<string>>,
    html: HtmlParseResult,
) {
    return Array.from(componentAliases.entries()).reduce((prevValue, [componentName, aliases]) => {
        const styleBuilder =
            (styleBuilders.get(componentName) as StyleBuilder | undefined) ??
            createStyleBuilder(options, componentName)!;
        styleBuilders.has(componentName) || styleBuilders.set(componentName, styleBuilder);

        return prevValue + styleBuilder.build(aliases, html.template, html.content);
    }, '');
}