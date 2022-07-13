<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import { Alignment, BrandColor, FunctionalColor } from '../../enums';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';
    import type { IStatsItem } from './stats-item.interface';
    import StatsItem from './StatsItem.svelte';
    import StatsItemTitle from './StatsItemTitle.svelte';
    import StatsItemValue from './StatsItemValue.svelte';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        alignment?: StringKeyOf<typeof Alignment>;
        background?: StringKeyOf<typeof BrandColor & typeof FunctionalColor>;
        items?: Array<IStatsItem>;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'alignment' | 'background'> {}
    interface $$ClassProps extends Pick<$$Props, 'alignment' | 'background'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
        item: {
            item: IStatsItem;
        };
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let alignment: $$Props['alignment'] = 'horizontal';
    export let background: $$Props['background'] = undefined;
    export let items: $$Props['items'] = [];
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-stats-group';
    const COLORS = { ...BrandColor, ...FunctionalColor };

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(
            PREFIX,
            { alignment: Alignment, background: COLORS },
            { alignment, background },
        ),
        generateResponsiveClasses<$$ResponsiveProps>(PREFIX, { alignment: Alignment, background: COLORS }, screen, {
            alignment: true,
            background: true,
        }),
        [restClass],
    );
</script>

<div class={classNames} {...$$restProps}>
    {#each items as item}
        <slot name="item" {item}>
            <StatsItem
                title={item.title}
                value={item.value}
                description={item.description}
                background={item.background}
            />
        </slot>
    {/each}
    <slot />
</div>

<style lang="scss" global>
    @import 'StatsGroup.scss';
</style>
