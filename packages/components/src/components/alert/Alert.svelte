<script>
    import {
        classes,
        BrandColor,
        FunctionalColor,
    } from '@svelte-daisyui/shared';
    import MdInfoOutline from 'svelte-icons/md/MdInfoOutline.svelte';
    import FaRegCheckCircle from 'svelte-icons/fa/FaRegCheckCircle.svelte';
    import MdWarning from 'svelte-icons/md/MdWarning.svelte';
    import MdErrorOutline from 'svelte-icons/md/MdErrorOutline.svelte';
    import Icon from '../icon/Icon.svelte';

    // -----------------------------------------------------------
    //  Type Definitions
    // -----------------------------------------------------------

    /**
     * @restProps {div}
     */

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * Background color of component. Functional colors such as `info`, `success`, `warning` and `error` add a default icon on the left.
     * @typedef {'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'} Color
     * @type {Color}
     */
    export let color = undefined;

    /**
     * Show an icon defaulted to the functional colors, e.g. `info`, `success`, `warning` and `error`.
     * @type {boolean}
     */
    export let showIcon = true;

    let restClass = undefined;
    /**
     * A space-separated list of the classes of the element.
     * @type {string}
     */
    export { restClass as class };

    // -----------------------------------------------------------
    // Screen
    // -----------------------------------------------------------

    /**
     * Responsive properties based on minimum screen widths.
     * @typedef {{ color?: Color }} ResponsiveProperties
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
