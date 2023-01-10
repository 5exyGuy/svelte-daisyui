import type { AtRule, Root } from 'postcss';
import { globalifySelector } from './globalify-selector';

export function globalifyPlugin(root: Root) {
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
}
