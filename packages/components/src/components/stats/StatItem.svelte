<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import { BrandColor, FunctionalColor } from '../../enums';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';

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
    {#if $$slots.figure}
        <div class="stat-item-figure">
            <slot name="figure" />
        </div>
    {/if}
    {#if $$slots.title || title}
        <div class="stat-item-title">
            {#if $$slots.title}
                <slot name="title" />
            {:else if title}
                {title}
            {/if}
        </div>
    {/if}
    {#if $$slots.value || value}
        <div class="stat-item-value">
            {#if $$slots.value}
                <slot name="value" />
            {:else if value}
                {value}
            {/if}
        </div>
    {/if}
    {#if $$slots.description || description}
        <div class="stat-item-desc">
            {#if $$slots.description}
                <slot name="description" />
            {:else if description}
                {description}
            {/if}
        </div>
    {/if}
    {#if $$slots.actions}
        <div class="stat-item-actions">
            <slot name="actions" />
        </div>
    {/if}
</div>

<style lang="scss" global>
    @import 'StatItem.scss';
</style>
