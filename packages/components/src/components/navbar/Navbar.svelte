<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import { BaseColor, BrandColor, FunctionalColor } from '../../enums';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        color?: StringKeyOf<typeof BrandColor & typeof FunctionalColor & typeof BaseColor> | 'neutral';
        rounded?: boolean;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'color' | 'rounded'> {}
    interface $$ClassProps extends Pick<$$Props, 'color' | 'rounded'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let color: $$Props['color'] = 'neutral';
    export let rounded: $$Props['rounded'] = false;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-navbar';
    const COLORS = { ...BrandColor, ...FunctionalColor, ...BaseColor, ...{ neutral: 'neutral' } };

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(PREFIX, { color: COLORS, rounded: 'rounded' }, { color, rounded }),
        generateResponsiveClasses<$$ResponsiveProps>(PREFIX, { color: COLORS, rounded: 'rounded' }, screen, {
            color: true,
            rounded: true,
        }),
        [restClass],
    );
</script>

<div class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'Navbar.scss';
</style>
