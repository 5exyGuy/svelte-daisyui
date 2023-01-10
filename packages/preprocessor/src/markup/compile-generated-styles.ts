import sass from 'sass';
import postcss, { AtRule, Root } from 'postcss';
import { globalifyRulePlugin } from './globalify-rule-plugin';
import { globalifySelector } from './globalify-selector';

const globalAttrPlugin = (root: Root) => {
    root.walkAtRules(/keyframes$/, (atrule) => {
        if (!atrule.params.startsWith('-global-')) {
            atrule.replaceWith(
                atrule.clone({
                    params: `-global-${atrule.params}`,
                }),
            );
        }
    });

    root.walkRules((rule) => {
        // we use endsWith for checking @keyframes and prefixed @-{prefix}-keyframes
        if ((rule?.parent as AtRule)?.name?.endsWith('keyframes')) {
            return;
        }

        rule.replaceWith(
            rule.clone({
                selectors: rule.selectors.map(globalifySelector),
            }),
        );
    });
};

export function compileGeneratedStyles(content: string, pathToStylesPackage: string) {
    const sassResult = sass.compileString(content, {
        style: 'compressed',
        loadPaths: [pathToStylesPackage],
    });
    const postcssResult = postcss([globalifyRulePlugin, globalAttrPlugin]).process(sassResult.css);
    return postcssResult.css;
}
