<script lang="ts" context="module">
    const drawers = new Map<string, Writable<boolean>>();
    const fixedDrawers = new Map<string, Writable<boolean>>();

    function addDrawer(name: string, openedStore: Writable<boolean>, fixed: boolean = false) {
        if (fixed) fixedDrawers.set(name, openedStore);
        else drawers.set(name, openedStore);

        // TODO: close all other drawers when one is opened
        openedStore.subscribe((opened) => {});
    }

    function removeDrawer(name: string, fixed: boolean = false) {
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
    import DrawerWrapperFixed from './DrawerWrapperFixed.svelte';
    import { Writable, writable } from 'svelte/store';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        name: string;
        position?: StringKeyOf<typeof Position>;
        opened?: boolean;
        closeOnOverlayClick?: boolean;
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
    export let closeOnOverlayClick: $$Props['closeOnOverlayClick'] = false;
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

    const drawerWrapperContext = getContext<DrawerWrapperContext>('dui-drawer-wrapper');
    const openedStore = writable(opened);

    $: $openedStore = opened;
    $: drawerWrapperContext && drawerWrapperContext.changeVisibility(opened);

    if (hasContext('dui-drawer-wrapper') && name === drawerWrapperContext.name) {
        const { onVisibilityChange } = drawerWrapperContext;

        // onMount(() => changeVisibility(opened));
        // beforeUpdate(() => changeVisibility(opened));
        onVisibilityChange((_opened) => (opened = _opened));
    }

    onMount(() => addDrawer(name, openedStore, !hasContext('dui-drawer-wrapper')));
    onDestroy(() => removeDrawer(name, !hasContext('dui-drawer-wrapper')));
</script>

{#if hasContext('dui-drawer-wrapper') && name === drawerWrapperContext.name}
    <div class={classNames} data-drawer-name={name} use:focusTrap={$openedStore} {...$$restProps}>
        <slot />
    </div>
{:else}
    <DrawerWrapperFixed {name} {closeOnOverlayClick} bind:opened={$openedStore}>
        <div class={classNames} data-drawer-name={name} use:focusTrap={$openedStore} {...$$restProps}>
            <slot />
        </div>
    </DrawerWrapperFixed>
{/if}

<style lang="scss" global>
    @import 'Drawer.scss';
</style>
