<script lang="ts">
    import { BrandColor, FunctionalColor, Position } from '../../enums';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';
    import type {
        TooltipClassProps,
        TooltipWrapperProps,
        TooltipWrapperResponsiveProps,
    } from './tooltip-wrapper-props.interface';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     *
     */
    export let color: TooltipWrapperProps['color'] = undefined;

    /**
     *
     */
    export let position: TooltipWrapperProps['position'] = 'top';

    /**
     *
     */
    export let show: TooltipWrapperProps['show'] = false;

    /**
     *
     */
    let restClass: TooltipWrapperProps['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Screen
    // -----------------------------------------------------------

    /**
     *
     */
    export let screen: TooltipWrapperProps['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-tooltip-wrapper';
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
        generateResponsiveClasses<TooltipWrapperResponsiveProps>(
            PREFIX,
            { color: COLORS, position: Position, show: 'open' },
            screen,
            { color: true, position: true, show: true },
        ),
        [restClass],
    );
</script>

<div class={classNames} {...$$restProps}>
    <slot name="content" />
    <slot />
</div>

<style lang="scss" global>
    @import 'TooltipWrapper.scss';
</style>
