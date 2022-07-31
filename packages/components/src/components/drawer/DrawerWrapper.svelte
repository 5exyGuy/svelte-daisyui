<script lang="ts">
    import { setContext } from 'svelte';
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

    let openedStore = writable(false);
    let closeOnBlurStore = writable(false);

    setContext<DrawerWrapperContext>(PREFIX, {
        name,
        setupStores({ opened, closeOnBlur }) {
            openedStore = opened;
            closeOnBlurStore = closeOnBlur;
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
        $openedStore = opened;
    }
</script>

{#if fixed}
    <Portal>
        <div class={classNames} {...$$restProps}>
            <div class="dui-drawer-wrapper-overlay" on:click={() => $closeOnBlurStore && toggleVisiblity(false)} />
            <slot />
        </div>
    </Portal>
{:else}
    <div class={classNames} {...$$restProps}>
        <div class="dui-drawer-wrapper-overlay" on:click={() => $closeOnBlurStore && toggleVisiblity(false)} />
        <slot />
    </div>
{/if}

<svelte:window on:keydown={processKeydown} />

<style lang="scss" global>
    @import 'DrawerWrapper.scss';
</style>
