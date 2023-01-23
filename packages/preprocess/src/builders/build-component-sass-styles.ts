import type { HtmlParseResult, PreprocessorOptions, StyleBuilder } from '../interfaces';
import { parseComponents } from '../markup';
import { createBuildContext } from './create-build-context';
import { resolveStyleBuilder } from './resolve-style-builder';

export function buildComponentSassStyles(
    options: PreprocessorOptions,
    styleBuilders: Map<string, StyleBuilder>,
    componentAliases: Map<string, Set<string>>,
    html: HtmlParseResult,
) {
    return Array.from(componentAliases.entries()).reduce((prevValue, [componentName, aliases]) => {
        const styleBuilder = (styleBuilders.get(componentName) as StyleBuilder) ?? resolveStyleBuilder(componentName)!;
        styleBuilders.has(componentName) || styleBuilders.set(componentName, styleBuilder);

        const uniqueProps = parseComponents(styleBuilder.componentSchema, aliases, html, options);
        const buildContext = createBuildContext(options, uniqueProps);
        styleBuilder.build(buildContext);
        const result = buildContext.toString();

        return `${result.libraries}${prevValue}${result.components}`;
    }, '');
}
