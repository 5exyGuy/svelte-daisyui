<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import { Alignment, BrandColor, FunctionalColor } from '../../enums';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        alignment?: StringKeyOf<typeof Alignment>;
        background?: StringKeyOf<typeof BrandColor & typeof FunctionalColor>;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'alignment' | 'background'> {}
    interface $$ClassProps extends Pick<$$Props, 'alignment' | 'background'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let alignment: $$Props['alignment'] = 'horizontal';
    export let background: $$Props['background'] = undefined;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-stat-group';
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
    <slot />
</div>

<style lang="scss" global>
    @import 'StatsGroup.scss';
</style>
