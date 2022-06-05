<script>
    import {
        classes,
        BrandColor,
        FunctionalColor,
        Size,
    } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    /**
     * @restProps {progress}
     *
     * @typedef {'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'} Color
     * @typedef {'xs' | 'sm' | 'md' | 'lg'} Size
     * @typedef {{ color?: Color, size?: Size }} Properties
     * @typedef {{ sm?: Properties, md?: Properties, lg?: Properties, xl?: Properties, '2xl'?: Properties }} Screen
     */

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {Color}
     */
    export let color = undefined;

    /**
     * @type {Size}
     */
    export let size = 'md';

    /**
     * @type {number}
     */
    export let value = 0;

    /**
     * @type {number}
     */
    export let max = 100;

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

    $: classNames = classes({
        prefix: 'progress',
        classProps: {
            color: { value: { ...BrandColor, ...FunctionalColor } },
            size: { value: Size },
        },
        props: { color, size },
        screen,
        restClass,
    });
</script>

<progress class={classNames} {value} {max} {...$$restProps} />

<style lang="scss">
    @import 'ProgressStyled.scss';
    @import 'ProgressUnstyled.scss';
</style>
