<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import { BrandColor, FunctionalColor, Position } from '../../enums';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        color?: StringKeyOf<typeof BrandColor & typeof FunctionalColor>;
        position?: StringKeyOf<typeof Position>;
        show?: boolean;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'color' | 'position' | 'show'> {}
    interface $$ClassProps extends Pick<$$Props, 'color' | 'position' | 'show'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let color: $$Props['color'] = undefined;
    export let position: $$Props['position'] = 'top';
    export let show: $$Props['show'] = false;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-tooltip-wrapper';
    const COLORS = { ...BrandColor, ...FunctionalColor };

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(
            PREFIX,
            {
                color: COLORS,
                position: Position,
                show: 'open',
            },
            { color, position, show },
        ),
        generateResponsiveClasses<$$ResponsiveProps>(
            PREFIX,
            { color: COLORS, position: Position, show: 'open' },
            screen,
            { color: true, position: true, show: true },
        ),
        [restClass],
    );
</script>

<div class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'TooltipWrapper.scss';
</style>
