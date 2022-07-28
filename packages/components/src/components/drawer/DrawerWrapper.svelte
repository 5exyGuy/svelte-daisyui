<script lang="ts">
    import { afterUpdate, setContext } from 'svelte';
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
    const overlayClickListeners = [] as Array<() => void>;

    setContext<DrawerWrapperContext>(PREFIX, {
        changeVisibility(opened: boolean) {
            openedStore.set(opened);
        },
        onVisibilityChange(listener: (opened: boolean) => void) {
            visibilityChangeListeners.push(listener);
        },
        onOverlayClick(listener: () => void) {
            overlayClickListeners.push(listener);
        },
    });

    afterUpdate(() => visibilityChangeListeners.forEach((listener) => listener($openedStore)));
</script>

{#if fixed}
    <Portal class={classNames} {...$$restProps}>
        <div
            class="dui-drawer-wrapper-overlay"
            on:click={() => overlayClickListeners.forEach((listener) => listener())}
        />
        <slot />
    </Portal>
{:else}
    <div class={classNames} {...$$restProps}>
        <div
            class="dui-drawer-wrapper-overlay"
            on:click={() => overlayClickListeners.forEach((listener) => listener())}
        />
        <slot />
    </div>
{/if}

<style lang="scss" global>
    @import 'DrawerWrapper.scss';
</style>
