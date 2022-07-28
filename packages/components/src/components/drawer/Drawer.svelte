<script lang="ts">
    import { beforeUpdate, getContext, onMount } from 'svelte';
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

    // TODO: Sometimes opened variable is not updated when the button is clicked.
    const { changeVisibility, onVisibilityChange, onOverlayClick } =
        getContext<DrawerWrapperContext>('dui-drawer-wrapper');

    function processKeydown(event: KeyboardEvent) {
        if (event.key !== 'Escape') return;

        opened = false;
        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('touch-action');
        if (document.body.style.length === 0) document.body.removeAttribute('style');
    }

    onMount(() => changeVisibility(opened));
    onVisibilityChange((opened) => {
        if (opened) {
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';
            return;
        }

        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('touch-action');
        if (document.body.style.length === 0) document.body.removeAttribute('style');
    });
    onOverlayClick(() => {
        opened = false;
        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('touch-action');
        if (document.body.style.length === 0) document.body.removeAttribute('style');
    });
    beforeUpdate(() => changeVisibility(opened));
</script>

<div class={classNames} data-opened={opened} use:focusTrap={{ enabled: opened }} {...$$restProps}>
    <slot />
</div>

<svelte:window on:keydown={processKeydown} />

<style lang="scss" global>
    @import 'Drawer.scss';
</style>
