<script lang="ts">
    import { beforeUpdate, getContext, onMount } from 'svelte';
    import type { StringKeyOf } from 'type-fest';
    import { Position } from '../../enums';
    import { generateDefaultClasses, joinClasses } from '../../utilities';
    import type { DrawerWrapperContext } from './drawer-wrapper-context.interface';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        position?: StringKeyOf<typeof Position>;
        opened?: boolean;
        closeOnBlur?: boolean;
    }
    interface $$ClassProps extends Pick<$$Props, 'position'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let position: $$Props['position'] = 'left';
    export let opened: $$Props['opened'] = false;
    export let closeOnBlur: $$Props['closeOnBlur'] = false;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-drawer-side';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(PREFIX, { position: Position }, { position }),
        [restClass],
    );

    // -----------------------------------------------------------
    //                       Functionality
    // -----------------------------------------------------------

    const context = getContext<DrawerWrapperContext>('dui-drawer-wrapper');
    let rootRef: HTMLDivElement;

    function processBlur() {
        if (!closeOnBlur) return;

        opened = false;
        context?.opened?.set(false);
    }

    function processKeydown(event: KeyboardEvent) {
        if (event.key === 'Escape') {
            opened = false;
            context?.opened?.set(false);
        }
    }

    onMount(() => opened && rootRef.focus());
    beforeUpdate(() => context?.opened?.set(opened));
</script>

<div class={classNames} tabindex="-1" on:blur={processBlur} bind:this={rootRef} {...$$restProps}>
    <slot />
</div>

<svelte:window on:keydown|preventDefault={processKeydown} />

<style lang="scss" global>
    @import 'Drawer.scss';
</style>
