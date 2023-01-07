<script lang="ts">
    import { beforeUpdate } from 'svelte';

    import { portal } from '../../actions';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends Omit<svelte.JSX.HTMLAttributes<HTMLDivElement>, 'target'> {
        target?: HTMLElement | string;
    }

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let target: $$Props['target'] = document.body;
</script>

<div class="dui-portal" use:portal={target} hidden>
    <slot />
</div>
