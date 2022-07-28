<script lang="ts">
    import { afterUpdate, beforeUpdate, getContext, onMount, tick } from 'svelte';
    import type { StringKeyOf } from 'type-fest';
    import { Position } from '../../enums';
    import { generateDefaultClasses, joinClasses } from '../../utilities';
    import type { DrawerWrapperContext } from './drawer-wrapper-context.interface';
    import { focusTrap } from '../../actions';

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

    function close() {
        opened = false;
        context?.opened?.set(false);

        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('touch-action');
        if (document.body.style.length === 0) document.body.removeAttribute('style');
    }

    function processBlur() {
        console.log('processBlur');
        if (closeOnBlur) close();
    }

    function processKeydown(event: KeyboardEvent) {
        if (event.key === 'Escape') close();
    }

    onMount(() => {
        if (opened) return;
        rootRef.focus();
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';
    });
    beforeUpdate(() => context?.opened?.set(opened));
    afterUpdate(async () => {
        if (opened) {
            // TODO: Find a better way to do this
            const interval = setInterval(() => {
                if (window.getComputedStyle(rootRef).visibility === 'hidden') return;
                clearInterval(interval);

                rootRef.focus();
                document.body.style.overflow = 'hidden';
                document.body.style.touchAction = 'none';
            }, 100);
            return;
        }

        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('touch-action');
        if (document.body.style.length === 0) document.body.removeAttribute('style');
    });

    let enabled = false;
</script>

<div
    use:focusTrap={{ enabled }}
    class={classNames}
    tabindex="-1"
    data-opened={opened}
    bind:this={rootRef}
    {...$$restProps}
>
    <slot />
</div>

<svelte:window on:keydown={processKeydown} />

<style lang="scss" global>
    @import 'Drawer.scss';
</style>
