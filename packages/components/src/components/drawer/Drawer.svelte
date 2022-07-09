<script lang="ts">
    import { onMount } from 'svelte';
    import { generateDefaultClasses, joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        visible?: boolean;
        mobile?: boolean;
        end?: boolean;
    }
    interface $$ClassProps extends Pick<$$Props, 'visible' | 'mobile' | 'end'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let visible = false;
    export let mobile = false;
    export let end = false;
    let restClass = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-drawer';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(
            PREFIX,
            { visible: 'visible', mobile: 'mobile', end: 'end' },
            { visible, mobile, end },
        ),
        [restClass],
    );

    // -----------------------------------------------------------
    //                       Functionality
    // -----------------------------------------------------------

    let drawerSideRef: HTMLDivElement;

    onMount(() => visible && drawerSideRef.focus());

    $: drawerSideRef && visible && drawerSideRef.focus();

    const drawerSideBlur = () => (visible = false);
</script>

<div class={classNames} {...$$restProps}>
    <slot />
    <div class="dui-drawer-side" tabindex="-1" bind:this={drawerSideRef} on:blur={drawerSideBlur}>
        <div tabindex="0" class="drawer-overlay" />
        <slot name="content" />
    </div>
</div>

<style lang="scss" global>
    @import 'Drawer.scss';
</style>
