<script>
    import MdInfoOutline from 'svelte-icons/md/MdInfoOutline.svelte';
    import FaRegCheckCircle from 'svelte-icons/fa/FaRegCheckCircle.svelte';
    import MdWarning from 'svelte-icons/md/MdWarning.svelte';
    import MdErrorOutline from 'svelte-icons/md/MdErrorOutline.svelte';
    import { BrandColor, FunctionalColor } from '../../enums';
    import Icon from '../icon/Icon.svelte';
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    //                      Type definitions
    // -----------------------------------------------------------

    /**
     * @typedef {'primary' | 'secondary' | 'accent'} BrandColor
     * @typedef {'info' | 'success' | 'warning' | 'error'} FunctionalColor
     */

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     * @type {string | undefined}
     */
    export let message;

    /**
     *  @type {{ component: typeof import('svelte').SvelteComponent; size: number; } | undefined}
     */
    export let icon;

    /**
     * @type {BrandColor | FunctionalColor | undefined}
     */
    export let color;

    let className = '';
    /**
     * @type {string | undefined}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    const classNames = classes(
        'alert',
        {
            color: {
                condition: !!color,
                key: color,
                value: { ...BrandColor, ...FunctionalColor },
            },
        },
        className,
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
        {#if message}
            <span>
                {message}
            </span>
        {:else}
            <slot name="content" />
        {/if}
    </div>
    <div class="alert-actions">
        <slot name="actions" />
    </div>
</div>

<style lang="scss">
    @import 'AlertStyled.scss';
    @import 'AlertUnstyled.scss';
</style>
