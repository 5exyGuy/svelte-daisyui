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
     * @typedef {'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'} Color
     * @typedef {{ color?: Color }} Properties
     * @typedef {{ sm?: Properties, md?: Properties, lg?: Properties, xl?: Properties, '2xl'?: Properties }} Screen
     */

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {Properties['color']}
     */
    export let color = undefined;

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
        prefix: 'alert',
        classProps: {
            color: {
                value: { ...BrandColor, ...FunctionalColor },
            },
        },
        props: { color },
        screen,
        restClass,
    });
</script>

<div class={classNames}>
    {#if $$slots.icon}
        <div class="alert-icon">
            <slot name="icon" />
        </div>
    {:else if !$$slots.icon && color}
        <div class="alert-icon">
            {#if color === 'info'}
                <Icon size={1.5} component={MdInfoOutline} />
            {:else if color === 'success'}
                <Icon size={1.5} component={FaRegCheckCircle} />
            {:else if color === 'warning'}
                <Icon size={1.5} component={MdWarning} />
            {:else if color === 'error'}
                <Icon size={1.5} component={MdErrorOutline} />
            {/if}
        </div>
    {/if}
    {#if $$slots.default}
        <div class="alert-content">
            <slot />
        </div>
    {/if}
    {#if $$slots.actions}
        <div class="alert-actions">
            <slot name="actions" />
        </div>
    {/if}
</div>

<style lang="scss">
    @import 'AlertStyled.scss';
    @import 'AlertUnstyled.scss';
</style>
