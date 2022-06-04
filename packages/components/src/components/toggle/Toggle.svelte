<script>
    import {
        classes,
        BrandColor,
        FunctionalColor,
        Size,
    } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    //  Type Definitions
    // -----------------------------------------------------------

    /**
     * @restProps {input}
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
    export let size = undefined;

    /**
     * @type {boolean}
     */
    export let disabled = false;

    /**
     * @type {boolean}
     */
    export let checked = false;

    /**
     * @type {boolean}
     */
    export let indeterminate = false;

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
        prefix: 'dui-toggle',
        classProps: {
            color: { value: { ...BrandColor, ...FunctionalColor } },
            size: { value: Size },
        },
        props: { color, size },
        screen,
        restClass,
    });
</script>

<input
    type="checkbox"
    {disabled}
    {checked}
    {indeterminate}
    class={classNames}
/>

<style lang="scss" global>
    @import 'Toggle.scss';
</style>
