<script lang="ts">
    import { BrandColor, FunctionalColor, Position } from '../../enums';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';
    import type { TooltipClassProps, TooltipProps, TooltipResponsiveProps } from './tooltip-props.interface';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     *
     */
    export let color: TooltipProps['color'] = undefined;

    /**
     *
     */
    export let show: TooltipProps['show'] = false;

    /**
     *
     */
    export let position: TooltipProps['position'] = undefined;

    /**
     *
     */
    let restClass: TooltipProps['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Screen
    // -----------------------------------------------------------

    /**
     *
     */
    export let screen: TooltipProps['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-tooltip';
    const COLORS = { ...BrandColor, ...FunctionalColor };

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<TooltipClassProps>(
            PREFIX,
            {
                color: COLORS,
                position: Position,
                show: 'open',
            },
            { color, position, show },
        ),
        generateResponsiveClasses<TooltipResponsiveProps>(
            PREFIX,
            { color: COLORS, position: Position, show: 'open' },
            screen,
            { color: true, position: true, show: true },
        ),
        [restClass],
    );
</script>

<div class={classNames}>
    <slot name="content" />
    <slot />
</div>

<style lang="scss" global>
    @import 'Tooltip.scss';
</style>
