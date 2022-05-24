<script>
    import { onMount } from 'svelte';

    import { classes } from '../../utils';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {boolean}
     */
    export let visible = false;

    /**
     * @type {boolean}
     */
    export let mobile = false;

    /**
     * @type {boolean}
     */
    export let end = false;

    let className;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'drawer',
        {
            visible: {
                condition: visible,
                value: 'open',
            },
            mobile: {
                condition: mobile,
                value: 'mobile',
            },
            end: {
                condition: end,
                value: 'end',
            },
        },
        className,
    );

    // -----------------------------------------------------------
    //                       Functionality
    // -----------------------------------------------------------

    let drawerSideRef;

    onMount(() => {
        if (visible) drawerSideRef.focus();
    });

    $: if (visible) {
        drawerSideRef.focus();
    }

    // const drawerSideFocus = () => {
    //     console.log('focus');
    // };
    const drawerSideBlur = () => {
        visible = false;
    };
</script>

<div class={classNames}>
    <div class="drawer-content">
        {#if $$slots.default}
            <slot />
        {:else if $$slots.content}
            <slot name="content" />
        {/if}
    </div>
    <div
        class="drawer-side"
        tabindex="-1"
        bind:this={drawerSideRef}
        on:blur={drawerSideBlur}
    >
        <div tabindex="0" class="drawer-overlay" />
        <slot name="side" />
    </div>
</div>

<style global lang="scss">
    @import 'DrawerStyled.scss';
    @import 'DrawerUnstyled.scss';
</style>
