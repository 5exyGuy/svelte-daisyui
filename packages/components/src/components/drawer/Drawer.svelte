<script lang="ts">
    import { beforeUpdate, getContext, hasContext, onMount } from 'svelte';
    import type { StringKeyOf } from 'type-fest';
    import { Position } from '../../enums';
    import { generateDefaultClasses, joinClasses } from '../../utilities';
    import type { DrawerWrapperContext } from './drawer-wrapper-context.interface';
    import { focusTrap } from '../../actions';
    import DrawerWrapperFixed from './DrawerWrapperFixed.svelte';

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

    // TODO: Sometimes opened variable is not updated when the button is clicked.
    const drawerWrapperContext = getContext<DrawerWrapperContext>('dui-drawer-wrapper');

    if (drawerWrapperContext) {
        const { changeVisibility, onVisibilityChange } = drawerWrapperContext;

        onMount(() => changeVisibility(opened));
        beforeUpdate(() => changeVisibility(opened));
        onVisibilityChange((_opened) => (opened = _opened));
    }
</script>

{#if !hasContext('dui-drawer-wrapper')}
    <DrawerWrapperFixed {name} {closeOnOverlayClick} bind:opened>
        <div class={classNames} data-drawer-name={name} use:focusTrap={opened} {...$$restProps}>
            <slot />
        </div>
    </DrawerWrapperFixed>
{:else if name === drawerWrapperContext?.name}
    <div class={classNames} data-drawer-name={name} use:focusTrap={opened} {...$$restProps}>
        <slot />
    </div>
{/if}

<style lang="scss" global>
    @import 'Drawer.scss';
</style>
