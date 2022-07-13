<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import { BrandColor, FunctionalColor } from '../../enums';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';
    import StatsItemDescription from './StatsItemDescription.svelte';
    import StatsItemTitle from './StatsItemTitle.svelte';
    import StatsItemValue from './StatsItemValue.svelte';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        title?: string;
        value?: string;
        description?: string;
        background?: StringKeyOf<typeof BrandColor & typeof FunctionalColor>;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'background'> {}
    interface $$ClassProps extends Pick<$$Props, 'background'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
        figure: {};
        actions: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let title: $$Props['title'] = undefined;
    export let value: $$Props['value'] = undefined;
    export let description: $$Props['description'] = undefined;
    export let background: $$Props['background'] = undefined;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-stat-item';
    const COLORS = { ...BrandColor, ...FunctionalColor };

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(PREFIX, { background: COLORS }, { background }),
        generateResponsiveClasses<$$ResponsiveProps>(PREFIX, { background: COLORS }, screen, { background: true }),
        [restClass],
    );
</script>

<div class={classNames} {...$$restProps}>
    {#if $$slots.default}
        <slot />
    {:else}
        <slot name="figure" />
        {#if title}
            <StatsItemTitle>{title}</StatsItemTitle>
        {/if}
        {#if value}
            <StatsItemValue>{value}</StatsItemValue>
        {/if}
        {#if description}
            <StatsItemDescription>{description}</StatsItemDescription>
        {/if}
        <slot name="actions" />
    {/if}
</div>

<style lang="scss" global>
    @import 'StatsItem.scss';
</style>
