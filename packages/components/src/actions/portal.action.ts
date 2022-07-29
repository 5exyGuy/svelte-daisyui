import { tick } from 'svelte';

export function portal(node: HTMLElement, target: HTMLElement | string = document.body) {
    let targetEl: HTMLElement;
    async function update(newTarget: HTMLElement | string) {
        target = newTarget;
        if (typeof target === 'string') {
            targetEl = document.querySelector(target);
            if (targetEl === null) {
                await tick();
                targetEl = document.querySelector(target);
            }
            if (targetEl === null) {
                throw new Error(`No element found matching css selector: "${target}"`);
            }
        } else if (target instanceof HTMLElement) {
            targetEl = target;
        } else {
            throw new TypeError(
                `Unknown portal target type: ${
                    target === null ? 'null' : typeof target
                }. Allowed types: string (CSS selector) or HTMLElement.`,
            );
        }
        targetEl.appendChild(node);
        node.hidden = false;
    }

    function destroy() {
        node.parentNode && node.parentNode.removeChild(node);
    }

    update(target);

    return {
        update,
        destroy,
    };
}
