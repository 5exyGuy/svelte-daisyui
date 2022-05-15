<script>
    import MdInfoOutline from 'svelte-icons/md/MdInfoOutline.svelte';
    import FaRegCheckCircle from 'svelte-icons/fa/FaRegCheckCircle.svelte';
    import MdWarning from 'svelte-icons/md/MdWarning.svelte';
    import MdErrorOutline from 'svelte-icons/md/MdErrorOutline.svelte';
    import { BrandColor, FunctionalColor } from '../../enums';
    import Icon from '../icon/Icon.svelte';
    import { classes } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    //                      Type Definitions
    // -----------------------------------------------------------

    /**
     * @typedef {'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'} Color
     * @typedef {{ component: typeof import('svelte').SvelteComponent; size: number; }} Icon
     * @typedef {{ color?: Color, icon?: Icon, class?: string }} ScreenProps
     * @typedef {{ sm?: ScreenProps, md?: ScreenProps, lg?: ScreenProps, xl?: ScreenProps, '2xl'?: ScreenProps }} Screen
     */

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     *  @type {Icon}
     */
    export let icon;

    /**
     * @type {Color}
     */
    export let color;

    let restClass;
    /**
     * @type {string}
     */
    export { restClass as class };

    /**
     * @type {Screen}
     */
    export let screen = { sm: {} };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'alert',
        [
            {
                condition: !!color,
                key: color,
                value: { ...BrandColor, ...FunctionalColor },
            },
        ],
        restClass,
    );
</script>

<div class={classNames}>
    <div class="alert-content">
        {#if icon}
            <svelte:component
                this={Icon}
                component={icon.component}
                size={icon.size}
            />
        {:else if !icon && color}
            {#if color === 'info'}
                <Icon size={1.5} component={MdInfoOutline} />
            {:else if color === 'success'}
                <Icon size={1.5} component={FaRegCheckCircle} />
            {:else if color === 'warning'}
                <Icon size={1.5} component={MdWarning} />
            {:else if color === 'error'}
                <Icon size={1.5} component={MdErrorOutline} />
            {/if}
        {/if}
        <slot />
    </div>
    <div class="alert-actions">
        <slot name="actions" />
    </div>
</div>

<style lang="scss">
    @import 'AlertStyled.scss';
    @import 'AlertUnstyled.scss';
</style>
