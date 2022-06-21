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
     * @type {boolean}
     */
    export let outline = false;

    let restClass = undefined;
    /**
     * @type {string}
     */
    export { restClass as class };

    // -----------------------------------------------------------
    // Screen
    // -----------------------------------------------------------

    /**
     * @type {Screen}
     */
    export let screen = undefined;

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
