<script>
    import MdInfoOutline from 'svelte-icons/md/MdInfoOutline.svelte';
    import FaRegCheckCircle from 'svelte-icons/fa/FaRegCheckCircle.svelte';
    import MdWarning from 'svelte-icons/md/MdWarning.svelte';
    import MdErrorOutline from 'svelte-icons/md/MdErrorOutline.svelte';
    import { BrandColor, FunctionalColor } from '../../enums';
    import Icon from '../icon/Icon.svelte';
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     * @type {string}
     */
    export let message;

    /**
     *  @type {{ component: typeof import('svelte').SvelteComponent; size: number; }}
     */
    export let icon;

    /**
     * @type {'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'}
     */
    export let color;

    let className;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
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
