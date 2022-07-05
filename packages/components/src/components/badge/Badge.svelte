<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import { BrandColor, FunctionalColor, Size } from '../../enums';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends Omit<svelte.JSX.HTMLAttributes<HTMLDivElement>, 'size'> {
        color?: StringKeyOf<typeof BrandColor & typeof FunctionalColor> | 'neutral' | 'ghost';
        size?: StringKeyOf<typeof Size>;
        outline?: boolean;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'color' | 'size' | 'outline'> {}
    interface $$ClassProps extends Pick<$$Props, 'color' | 'size' | 'outline'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let color: $$Props['color'] = 'neutral';
    export let size: $$Props['size'] = 'md';
    export let outline: $$Props['outline'] = false;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-badge';
    const COLORS = { ...BrandColor, ...FunctionalColor, ...{ neutral: 'neutral', ghost: 'ghost' } };

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(
            PREFIX,
            { color: COLORS, outline: 'outline', size: Size },
            { color, outline, size },
        ),
        generateResponsiveClasses<$$ResponsiveProps>(
            PREFIX,
            { color: COLORS, outline: 'outline', size: Size },
            screen,
            {
                color: true,
                outline: true,
                size: true,
            },
        ),
        [restClass],
    );
</script>

<div class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'Badge.scss';
</style>
