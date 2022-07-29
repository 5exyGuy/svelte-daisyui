<script lang="ts">
    import { afterUpdate, beforeUpdate, setContext } from 'svelte';
    import { writable } from 'svelte/store';
    import { generateDefaultClasses, joinClasses } from '../../utilities';
    import Portal from '../portal/Portal.svelte';
    import type { DrawerWrapperContext } from './drawer-wrapper-context.interface';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        fixed?: boolean;
    }
    interface $$ClassProps extends Pick<$$Props, 'fixed'> {
        opened?: boolean;
    }

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let fixed: $$Props['fixed'] = false;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-drawer-wrapper';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(
            PREFIX,
            { fixed: 'fixed', opened: 'open' },
            { fixed, opened: $openedStore },
        ),
        [restClass],
    );

    // -----------------------------------------------------------
    //                       Functionality
    // -----------------------------------------------------------

    const openedStore = writable(false);
    const visibilityChangeListeners = [] as Array<(opened: boolean) => void>;

    setContext<DrawerWrapperContext>(PREFIX, {
        changeVisibility(opened: boolean) {
            if (opened) addScrollLock();
            openedStore.set(opened);
        },
        onVisibilityChange(listener: (opened: boolean) => void) {
            visibilityChangeListeners.push(listener);
        },
    });

    function processKeydown(event: KeyboardEvent) {
        if (event.key !== 'Escape') return;
        toggleVisiblity(false);
    }

    function addScrollLock() {
        const paddingRight = parseInt(window.getComputedStyle(document.body).paddingRight, 10);
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = `${paddingRight + scrollbarWidth}px`;
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';
    }

    function removeScrollLock() {
        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('touch-action');
        document.body.style.removeProperty('padding-right');
        if (document.body.style.length === 0) document.body.removeAttribute('style');
    }

    function toggleVisiblity(opened: boolean) {
        if (opened) addScrollLock();
        else removeScrollLock();
        openedStore.set(opened);
    }

    afterUpdate(() => visibilityChangeListeners.forEach((listener) => listener($openedStore)));
</script>

{#if fixed}
    <Portal class={classNames} {...$$restProps}>
        <div class="dui-drawer-wrapper-overlay" on:click={() => toggleVisiblity(false)} />
        <slot />
    </Portal>
{:else}
    <div class={classNames} {...$$restProps}>
        <div class="dui-drawer-wrapper-overlay" on:click={() => toggleVisiblity(false)} />
        <slot />
    </div>
{/if}

<svelte:window on:keydown={processKeydown} />

<style lang="scss" global>
    @import 'DrawerWrapper.scss';
</style>
