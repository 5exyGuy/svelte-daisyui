<script lang="ts">
    import type { AlertProps } from './alert-props.interface';
    import { BrandColor, FunctionalColor } from '../../enums';
    import type { ClassesParams } from '../../interfaces';
    import { classes } from '../../utils';
    import MdInfoOutline from 'svelte-icons/md/MdInfoOutline.svelte';
    import FaRegCheckCircle from 'svelte-icons/fa/FaRegCheckCircle.svelte';
    import MdWarning from 'svelte-icons/md/MdWarning.svelte';
    import MdErrorOutline from 'svelte-icons/md/MdErrorOutline.svelte';
    import Icon from '../icon/Icon.svelte';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * Background color of component. Functional colors such as `info`, `success`, `warning` and `error` add a default icon on the left.
     */
    export let color: AlertProps['color'] = undefined;

    /**
     * The icon that will appear before the content.
     */
    export let icon: AlertProps['icon'] =
        color === 'info'
            ? MdInfoOutline
            : color === 'success'
            ? FaRegCheckCircle
            : color === 'warning'
            ? MdWarning
            : color === 'error'
            ? MdErrorOutline
            : undefined;

    /**
     * The message that will be visible inside the Alert container.
     */
    export let message: AlertProps['message'] = undefined;

    /**
     * Show an icon defaulted to the functional colors, e.g. `info`, `success`, `warning` and `error`.
     */
    export let showIcon: AlertProps['showIcon'] = true;

    let restClass: AlertProps['class'] = undefined;
    /**
     * A space-separated list of the classes of the element.
     */
    export { restClass as class };

    // -----------------------------------------------------------
    // Screen
    // -----------------------------------------------------------

    /**
     * Responsive properties for the component.
     */
    export let screen: AlertProps['screen'];

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes<AlertProps>({
        prefix: 'dui-alert',
        propData: { color: { ...BrandColor, ...FunctionalColor } },
        propValues: { color },
        screen,
        restClass,
    } as ClassesParams<AlertProps>);
</script>

<div class={classNames} {...$$restProps}>
    {#if $$slots.default}
        <slot />
    {:else if $$slots.content}
        <div>
            {#if showIcon}
                <Icon size={1.5} component={icon} />
            {/if}
            <slot name="content" />
        </div>
    {:else if message}
        <div>
            {#if showIcon}
                <Icon size={1.5} component={icon} />
            {/if}
            <span>{message}</span>
        </div>
    {/if}
    {#if $$slots.actions}
        <div class="dui-alert-actions">
            <slot name="actions" />
        </div>
    {/if}
</div>

<style lang="scss" global>
    @import 'Alert.scss';
</style>
