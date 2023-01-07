<script lang="ts">
    import { setContext } from 'svelte';
    import { get, Writable, writable } from 'svelte/store';
    import { generateDefaultClasses, joinClasses, toggleScrollLock } from '../../utilities';
    import Portal from '../portal/Portal.svelte';
    import type { DrawerWrapperContext } from './drawer-wrapper-context.interface';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        name: string;
        fixed?: boolean;
        opened?: boolean;
        closeOnBlur?: boolean;
        container?: { opened: Writable<boolean>; closeOnBlur: Writable<boolean> };
    }
    interface $$ClassProps {
        opened?: boolean;
        fixed?: boolean;
    }

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let name: $$Props['name'];
    export let fixed: $$Props['fixed'] = false;
    export let opened: $$Props['opened'] = false;
    export let closeOnBlur: $$Props['closeOnBlur'] = false;
    export let container: $$Props['container'] = {
        opened: writable(false),
        closeOnBlur: writable(false),
    };
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-drawer-wrapper';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(PREFIX, { fixed: 'fixed', opened: 'open' }, { fixed, opened }),
        [restClass],
    );

    // -----------------------------------------------------------
    //                       Functionality
    // -----------------------------------------------------------

    setContext<DrawerWrapperContext>(PREFIX, {
        name,
        setContainer(_container: $$Props['container']) {
            container = _container;

            opened = get(container.opened);
            closeOnBlur = get(container.closeOnBlur);

            container.opened.subscribe((value) => (opened = value));
            container.closeOnBlur.subscribe((value) => (closeOnBlur = value));
        },
    });

    function processKeydown(event: KeyboardEvent) {
        if (event.key !== 'Escape' && opened) return;
        toggleVisiblity(false);
        // event.preventDefault();
    }

    function toggleVisiblity(opened: boolean) {
        toggleScrollLock(opened);
        updateOpened(opened);
    }

    function updateOpened(opened: boolean) {
        toggleScrollLock(opened);
        container.opened.set(opened);
    }

    function updateCloseOnBlur(closeOnBlur: boolean) {
        toggleScrollLock(opened);
        container.closeOnBlur.set(closeOnBlur);
    }

    $: updateOpened(opened);
    $: updateCloseOnBlur(closeOnBlur);
</script>

{#if fixed}
    <Portal>
        <div class={classNames} {...$$restProps}>
            <div
                class="dui-drawer-wrapper-overlay"
                on:click|preventDefault={() => closeOnBlur && toggleVisiblity(false)}
            />
            <slot />
        </div>
    </Portal>
{:else}
    <div class={classNames} {...$$restProps}>
        <div class="dui-drawer-wrapper-overlay" on:click|preventDefault={() => closeOnBlur && toggleVisiblity(false)} />
        <slot />
    </div>
{/if}

<svelte:window on:keydown={processKeydown} />

<style lang="scss" global>
    @import 'DrawerWrapper.scss';
</style>
