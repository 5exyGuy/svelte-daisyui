<script>
    import {
        classes,
        BrandColor,
        FunctionalColor,
        Size,
        ButtonShape,
    } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    /**
     * @typedef {'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'ghost' | 'link'} Color
     * @typedef {'xs' | 'sm' | 'md' | 'lg'} Size
     * @typedef {'square' | 'circle'} Shape
     * @typedef {{ color?: Color, size?: Size, shape?: Shape }} Properties
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
     * @type {Properties['shape']}
     */
    export let shape = undefined;

    /**
     * @type {boolean}
     */
    export let active = false;

    /**
     * @type {boolean}
     */
    export let block = false;

    /**
     * @type {boolean}
     */
    export let outline = false;

    /**
     * @type {boolean}
     */
    export let loading = false;

    /**
     * @type {boolean}
     */
    export let disabled = false;

    /**
     * @type {boolean}
     */
    export let noAnim = false;

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
        prefix: 'btn',
        classProps: {
            color: {
                value: {
                    ...BrandColor,
                    ...FunctionalColor,
                    ...{ ghost: 'ghost', link: 'link' },
                },
            },
            size: { value: Size },
            shape: { value: ButtonShape },
            active: { value: 'active' },
            block: { value: 'block' },
            outline: { value: 'outline' },
            loading: { value: 'loading' },
            noAnim: { value: 'no-animation' },
        },
        props: {
            color,
            size,
            shape,
            active,
            block: block && !shape,
            outline,
            loading,
            noAnim,
        },
        restClass,
        screen,
    });
</script>

<button on:click class={classNames} {disabled}>
    <slot />
</button>

<style lang="scss">
    @import 'ButtonStyled.scss';
    @import 'ButtonUnstyled.scss';
</style>
