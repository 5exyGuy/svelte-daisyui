<script lang="ts">
    import { tick } from 'svelte';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props {
        target?: HTMLElement | string;
    }

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    export let target: $$Props['target'] = 'body';

    // -----------------------------------------------------------
    // Functionality
    // -----------------------------------------------------------

    function portal(node: HTMLElement, target: $$Props['target']) {
        let targetEl: HTMLElement;
        async function update(newTarget: $$Props['target']) {
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
</script>

<div use:portal={target} hidden>
    <slot />
</div>
