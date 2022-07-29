<script lang="ts">
    import { afterUpdate, beforeUpdate, setContext } from 'svelte';
    import { writable } from 'svelte/store';
    import { generateDefaultClasses, joinClasses, lockSroll, unlockScroll } from '../../utilities';
    import Portal from '../portal/Portal.svelte';
    import type { DrawerWrapperContext } from './drawer-wrapper-context.interface';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        fixed?: boolean;
        name: string;
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

    export let fixed: $$Props['fixed'] = false;
    export let name: $$Props['name'];
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
        name,
        changeVisibility(opened: boolean) {
            toggleVisiblity(opened);
        },
        onVisibilityChange(listener: (opened: boolean) => void) {
            visibilityChangeListeners.push(listener);
        },
    });

    function processKeydown(event: KeyboardEvent) {
        if (event.key !== 'Escape') return;
        toggleVisiblity(false);
        event.preventDefault();
    }

    function toggleVisiblity(opened: boolean) {
        if (opened) lockSroll();
        else unlockScroll();
        openedStore.set(opened);
    }

    afterUpdate(() => visibilityChangeListeners.forEach((listener) => listener($openedStore)));
</script>

{#if fixed}
    <Portal>
        <div class={classNames} {...$$restProps}>
            <div class="dui-drawer-wrapper-overlay" on:click={() => toggleVisiblity(false)} />
            <slot />
        </div>
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
