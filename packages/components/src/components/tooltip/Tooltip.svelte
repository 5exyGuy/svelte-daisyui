<script>
    import {
        classes,
        BrandColor,
        FunctionalColor,
        Position,
    } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    //  Type Definitions
    // -----------------------------------------------------------

    /**
     * @restProps {div}
     *
     * @typedef {'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'} Color
     * @typedef {'top' | 'bottom' | 'left' | 'right'} Position
     * @typedef {{ color?: Color, position?: Position, open?: boolean }} Properties
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
     * @type {boolean}
     */
    export let open = false;

    /**
     * @type {Position}
     */
    export let position = undefined;

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
        prefix: 'tooltip',
        classProps: {
            open: { value: 'open' },
            position: { value: Position },
            color: { value: { ...BrandColor, ...FunctionalColor } },
        },
        props: { open, position, color },
        screen,
        restClass,
    });
</script>

<div class={classNames}>
    <slot name="content" />
    <slot />
</div>

<style lang="scss">
    @import 'Tooltip.scss';
</style>
