<script lang="ts">
    import { classes, BrandColor, FunctionalColor, type Screen, type ClassesParams } from '@svelte-daisyui/shared';
    import type { SvelteComponent } from 'svelte';
    import type { StringKeyOf } from 'type-fest';
    import MdInfoOutline from 'svelte-icons/md/MdInfoOutline.svelte';
    import FaRegCheckCircle from 'svelte-icons/fa/FaRegCheckCircle.svelte';
    import MdWarning from 'svelte-icons/md/MdWarning.svelte';
    import MdErrorOutline from 'svelte-icons/md/MdErrorOutline.svelte';
    import Icon from '../icon/Icon.svelte';

    // -----------------------------------------------------------
    //  Type Definitions and Interfaces
    // -----------------------------------------------------------

    type Color = StringKeyOf<typeof BrandColor & typeof FunctionalColor>;

    interface Properties {
        color: Color;
    }

    interface ResponsiveProperties {
        color: Color;
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * Background color of component. Functional colors such as `info`, `success`, `warning` and `error` add a default icon on the left.
     */
    export let color: Color = undefined;

    export let icon: typeof SvelteComponent =
        color === 'info'
            ? MdInfoOutline
            : color === 'success'
            ? FaRegCheckCircle
            : color === 'warning'
            ? MdWarning
            : color === 'error'
            ? MdErrorOutline
            : undefined;

    export let message: string = undefined;

    /**
     * Show an icon defaulted to the functional colors, e.g. `info`, `success`, `warning` and `error`.
     */
    export let showIcon = true;

    let restClass = undefined;
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
    export let screen: Screen<ResponsiveProperties> = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes<Properties>({
        prefix: 'dui-alert',
        propData: { color: { ...BrandColor, ...FunctionalColor } },
        propValues: { color },
        screen,
        restClass,
    } as ClassesParams<Properties>);
</script>

<div class={classNames} {...$$restProps}>
    {#if $$slots.default}
        <slot />
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
