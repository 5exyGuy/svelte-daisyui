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
    import AlertIcon from './AlertIcon.svelte';

    // -----------------------------------------------------------
    //  Type Definitions
    // -----------------------------------------------------------

    /**
     * @restProps {div}
     * @typedef {'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'} Color
     * @typedef {{ color?: Color }} ResponsiveProperties
     * @typedef {{ sm?: ResponsiveProperties; md?: ResponsiveProperties; lg?: ResponsiveProperties; xl?: ResponsiveProperties; '2xl'?: ResponsiveProperties }} Screen
     */

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * Background color of component. Functional colors such as `info`, `success`, `warning` and `error` add a default icon on the left.
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
    // Screenaaaa
    // -----------------------------------------------------------

    /**
     * Responsive properties based on minimum screen widths.
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
            <AlertIcon>
                <Icon size={1.5} component={MdInfoOutline} />
            </AlertIcon>
        {:else if color === 'success'}
            <AlertIcon>
                <Icon size={1.5} component={FaRegCheckCircle} />
            </AlertIcon>
        {:else if color === 'warning'}
            <AlertIcon>
                <Icon size={1.5} component={MdWarning} />
            </AlertIcon>
        {:else if color === 'error'}
            <AlertIcon>
                <Icon size={1.5} component={MdErrorOutline} />
            </AlertIcon>
        {/if}
    {/if}
    <slot />
</div>

<style lang="scss" global>
    @import 'Alert.scss';
</style>
