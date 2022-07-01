<script lang="ts">
    import { BrandColor, FunctionalColor, Size } from '../../enums';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';
    import type { BadgeClassProps, BadgeProps, BadgeResponsiveProps } from './badge-props.interface';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     *
     */
    export let color: BadgeProps['color'] = undefined;

    /**
     *
     */
    export let size: BadgeProps['size'] = undefined;

    /**
     *
     */
    export let outline: BadgeProps['outline'] = false;

    /**
     * A space-separated list of the classes of the element.
     */
    let restClass: BadgeProps['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Screen
    // -----------------------------------------------------------

    /**
     *
     */
    export let screen: BadgeProps['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-badge';
    const COLORS = { ...BrandColor, ...FunctionalColor, ...{ ghost: 'ghost' } };

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<BadgeClassProps>(
            PREFIX,
            { color: COLORS, outline: 'outline', size: Size },
            { color, outline, size },
        ),
        generateResponsiveClasses<BadgeResponsiveProps>(
            PREFIX,
            { color: COLORS, outline: 'outline', size: Size },
            screen,
            { color: true, outline: true, size: true },
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
