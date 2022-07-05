<script lang="ts">
    import { BrandColor, FunctionalColor, Size } from '../../enums';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';
    import type { BadgeClassProps, BadgeProps, BadgeResponsiveProps } from './badge-props.interface';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @default 'neutral'
     */
    export let color: BadgeProps['color'] = 'neutral';

    /**
     * @default 'md'
     */
    export let size: BadgeProps['size'] = 'md';

    /**
     * @default false
     */
    export let outline: BadgeProps['outline'] = false;

    /**
     * A space-separated list of the classes of the element.
     * @default undefined
     */
    let restClass: BadgeProps['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Screen
    // -----------------------------------------------------------

    /**
     * @default undefined
     */
    export let screen: BadgeProps['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-badge';
    const COLORS = { ...BrandColor, ...FunctionalColor, ...{ neutral: 'neutral', ghost: 'ghost' } };

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
