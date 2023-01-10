import type { Root } from 'postcss';
import { GLOBAL_SELECTOR_REGEX } from '../constants';
import { globalifySelector } from './globalify-selector';

export function globalifyRulePlugin(root: Root) {
    root.walkRules(GLOBAL_SELECTOR_REGEX, (rule) => {
        const modifiedSelectors = rule.selectors
            .filter((selector) => selector !== ':global')
            .map((selector) => {
                const [beginning, ...rest] = selector.split(GLOBAL_SELECTOR_REGEX);

                if (rest.length === 0) return beginning as string;

                return [beginning, ...rest.map(globalifySelector)]
                    .map((str) => str!.trim())
                    .join(' ')
                    .trim();
            });

        if (modifiedSelectors.length === 0) {
            if (rule.parent?.type === 'atrule' && rule.selector === ':global') rule.replaceWith(...rule.nodes);
            else rule.remove();

            return;
        }

        rule.replaceWith(
            rule.clone({
                selectors: modifiedSelectors,
            }),
        );
    });
}
