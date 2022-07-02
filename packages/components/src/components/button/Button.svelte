<script lang="ts">
    import { BrandColor, FunctionalColor, Size } from '../../enums';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';
    import type { ButtonClassProps, ButtonProps, ButtonResponsiveProps } from './button-props.interface';
    import { ButtonShape } from './button-shape.enum';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     *
     */
    export let color: ButtonProps['color'] = undefined;

    /**
     *
     */
    export let size: ButtonProps['size'] = 'md';

    /**
     *
     */
    export let shape: ButtonProps['shape'] = undefined;

    /**
     *
     */
    export let active: ButtonProps['active'] = false;

    /**
     *
     */
    export let block: ButtonProps['block'] = false;

    /**
     *
     */
    export let outline: ButtonProps['outline'] = false;

    /**
     *
     */
    export let loading: ButtonProps['loading'] = false;

    /**
     *
     */
    export let disabled: ButtonProps['disabled'] = false;

    /**
     *
     */
    export let animate: ButtonProps['animate'] = false;

    /**
     *
     */
    let restClass: ButtonProps['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Screen
    // -----------------------------------------------------------

    /**
     *
     */
    export let screen: ButtonProps['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-btn';
    const COLORS = { ...BrandColor, ...FunctionalColor, ...{ ghost: 'ghost', link: 'link' } };

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<ButtonClassProps>(
            PREFIX,
            {
                active: 'active',
                animate: 'no-animation',
                block: 'block',
                outline: 'outline',
                loading: 'loading',
                color: COLORS,
                shape: ButtonShape,
                size: Size,
            },
            { active, animate, block, outline, loading, color, shape, size },
        ),
        generateResponsiveClasses<ButtonResponsiveProps>(
            PREFIX,
            { block: 'block', color: COLORS, shape: ButtonShape, size: Size },
            screen,
            { block: true, color: true, shape: true, size: true },
        ),
        [restClass],
    );
</script>

<button class={classNames} {disabled} {...$$restProps} on:click on:focus on:mouseover on:mouseenter on:mouseleave>
    <slot />
</button>

<style lang="scss" global>
    @import 'Button.scss';
</style>
