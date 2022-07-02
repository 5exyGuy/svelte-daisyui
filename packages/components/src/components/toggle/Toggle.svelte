<script lang="ts">
    import { BrandColor, FunctionalColor, Size } from '../../enums';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';
    import type { ToggleClassProps, ToggleProps, ToggleResponsiveProps } from './toggle-props.interface';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     *
     */
    export let color: ToggleProps['color'] = undefined;

    /**
     *
     */
    export let size: ToggleProps['size'] = 'md';

    /**
     *
     */
    export let disabled: ToggleProps['disabled'] = false;

    /**
     *
     */
    export let checked: ToggleProps['checked'] = false;

    /**
     *
     */
    export let indeterminate: ToggleProps['indeterminate'] = false;

    /**
     *
     */
    let restClass: ToggleProps['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Screen
    // -----------------------------------------------------------

    /**
     *
     */
    export let screen = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-toggle';
    const COLORS = { ...BrandColor, ...FunctionalColor };

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<ToggleClassProps>(PREFIX, { color: COLORS, size: Size }, { color, size }),
        generateResponsiveClasses<ToggleResponsiveProps>(PREFIX, { color: COLORS, size: Size }, screen, {
            color: true,
            size: true,
        }),
        [restClass],
    );
</script>

<input type="checkbox" {disabled} {checked} {indeterminate} class={classNames} {...$$restProps} />

<style lang="scss" global>
    @import 'Toggle.scss';
</style>
