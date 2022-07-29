<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import { portal } from '../../actions';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    // type T = $$Generic<StringKeyOf<HTMLElementTagNameMap>>;

    interface $$Props extends Omit<svelte.JSX.HTMLAttributes<HTMLElement>, 'target'> {
        element: StringKeyOf<HTMLElementTagNameMap>;
        target?: HTMLElement | string;
    }

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    export let element: $$Props['element'] = 'div';
    export let target: $$Props['target'] = document.body;
</script>

<svelte:element this={element} use:portal={target} {...$$restProps}>
    <slot />
</svelte:element>
