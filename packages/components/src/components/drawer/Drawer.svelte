<script lang="ts" context="module">
    const drawers = new Map<string, Writable<boolean>>();
    const fixedDrawers = new Map<string, Writable<boolean>>();

    export function addDrawer(name: string, openedStore: Writable<boolean>, fixed: boolean = false) {
        if (fixed) fixedDrawers.set(name, openedStore);
        else drawers.set(name, openedStore);

        // TODO: close all other drawers when one is opened
        openedStore.subscribe((opened) => {});
    }

    export function removeDrawer(name: string, fixed: boolean = false) {
        if (fixed) fixedDrawers.delete(name);
        else drawers.delete(name);
    }
</script>

<script lang="ts">
    import { getContext, hasContext, onDestroy, onMount } from 'svelte';
    import type { StringKeyOf } from 'type-fest';
    import { Position } from '../../enums';
    import { generateDefaultClasses, joinClasses } from '../../utilities';
    import type { DrawerWrapperContext } from './drawer-wrapper-context.interface';
    import { focusTrap } from '../../actions';
    // import DrawerWrapperFixed from './DrawerWrapperFixed.svelte';
    import { Writable, writable } from 'svelte/store';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        name: string;
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

    export let name: $$Props['name'];
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

    const openedStore = writable(opened);
    const closeOnBlurStore = writable(closeOnBlur);

    const drawerWrapperContext = getContext<DrawerWrapperContext>('dui-drawer-wrapper');
    if (hasContext('dui-drawer-wrapper'))
        drawerWrapperContext.setupStores({ opened: openedStore, closeOnBlur: closeOnBlurStore });

    openedStore.subscribe((value) => (opened = value));
    $: $openedStore = opened;

    onMount(() => addDrawer(name, openedStore, !drawerWrapperContext));
    onDestroy(() => removeDrawer(name, !drawerWrapperContext));
</script>

{#if hasContext('dui-drawer-wrapper') && name === drawerWrapperContext.name}
    <div class={classNames} data-drawer-name={name} use:focusTrap={$openedStore} {...$$restProps}>
        <slot />
    </div>
{:else}
    <!-- <DrawerWrapperFixed {name} {closeOnBlur} bind:opened={$openedStore}> -->
    <div class={classNames} data-drawer-name={name} use:focusTrap={$openedStore} {...$$restProps}>
        <slot />
    </div>
    <!-- </DrawerWrapperFixed> -->
{/if}

<style lang="scss" global>
    @import 'Drawer.scss';
</style>
