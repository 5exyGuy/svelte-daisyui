import { SELECTOR_COMBINATOR_REGEX } from '../constants';

export function globalifySelector(selector: string) {
    const parts = selector.trim().split(SELECTOR_COMBINATOR_REGEX);

    const newSelector = [];

    for (let i = 0; i < parts.length; i++) {
        const part = parts[i]!;

        // if this is a separator or a :global
        if (i % 2 !== 0 || part === '' || part.startsWith(':global')) {
            newSelector.push(part);
            continue;
        }

        // :local() with scope
        if (part.startsWith(':local(')) {
            newSelector.push(part.replace(/:local\((.+?)\)/g, '$1'));
            continue;
        }

        // :local inlined in a selector
        if (part.startsWith(':local')) {
            // + 2 to ignore the :local and space combinator
            const startIndex = i + 2;
            let endIndex = parts.findIndex((p, idx) => idx > startIndex && p.startsWith(':global'));

            endIndex = endIndex === -1 ? parts.length - 1 : endIndex;

            newSelector.push(...parts.slice(startIndex, endIndex + 1));

            i = endIndex;

            continue;
        }

        newSelector.push(`:global(${part})`);
    }

    return newSelector.join('');
}
