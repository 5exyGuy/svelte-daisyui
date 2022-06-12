<script>
    import MdInfoOutline from 'svelte-icons/md/MdInfoOutline.svelte';
    import FaRegCheckCircle from 'svelte-icons/fa/FaRegCheckCircle.svelte';
    import MdWarning from 'svelte-icons/md/MdWarning.svelte';
    import MdErrorOutline from 'svelte-icons/md/MdErrorOutline.svelte';
    import Icon from '../icon/Icon.svelte';
    import {
        BrandColor,
        FunctionalColor,
        classes,
    } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    //  Type Definitions
    // -----------------------------------------------------------

    /**
     * @restProps {div}
     *
     * @typedef {'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'} Color
     * @typedef {{ color?: Color }} ResponsiveProperties
     * @typedef {{ sm?: ResponsiveProperties, md?: ResponsiveProperties, lg?: ResponsiveProperties, xl?: ResponsiveProperties, '2xl'?: ResponsiveProperties }} Screen
     */

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {Color}
     */
    export let color = undefined;

    /**
     * @type {boolean}
     */
    export let showIcon = true;

    let restClass = undefined;
    /**
     * @type {string}
     */
    export { restClass as class };

    // -----------------------------------------------------------
    // Screen
    // -----------------------------------------------------------

    /**
     * @type {Screen}
     */
    export let screen = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes({
        prefix: 'dui-alert',
        classProps: { color: { value: { ...BrandColor, ...FunctionalColor } } },
        props: { color },
        screen,
        restClass,
    });
</script>

<div class={classNames} {...$$restProps}>
    {#if showIcon && color}
        {#if color === 'info'}
            <div class="dui-alert-icon">
                <Icon size={1.5} component={MdInfoOutline} />
            </div>
        {:else if color === 'success'}
            <div class="dui-alert-icon">
                <Icon size={1.5} component={FaRegCheckCircle} />
            </div>
        {:else if color === 'warning'}
            <div class="dui-alert-icon">
                <Icon size={1.5} component={MdWarning} />
            </div>
        {:else if color === 'error'}
            <div class="dui-alert-icon">
                <Icon size={1.5} component={MdErrorOutline} />
            </div>
        {/if}
    {/if}
    <slot />
</div>

<style lang="scss" global>
    @import 'Alert.scss';
</style>
