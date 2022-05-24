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
     * @typedef {'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'} Color
     * @typedef {'xs' | 'sm' | 'md' | 'lg'} Size
     * @typedef {{ color?: Color, size?: Size }} Properties
     * @typedef {{ sm?: Properties, md?: Properties, lg?: Properties, xl?: Properties, '2xl'?: Properties }} Screen
     */

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {Properties['color']}
     */
    export let color = undefined;

    /**
     * @type {Properties['size']}
     */
    export let size = undefined;

    /**
     * @type {boolean}
     */
    export let checked = false;

    /**
     * @type {boolean}
     */
    export let disabled = false;

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
        prefix: 'checkbox',
        classProps: {
            color: {
                value: { ...BrandColor, ...FunctionalColor },
            },
            size: {
                value: { ...Size },
            },
        },
        props: { color, size },
        screen,
        restClass,
    });
</script>

<input
    class={classNames}
    type="checkbox"
    {checked}
    on:change
    {disabled}
    {indeterminate}
/>

<style lang="scss">
    @import 'CheckboxStyled.scss';
    @import 'CheckboxUnstyled.scss';
</style>
