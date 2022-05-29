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
     * @slot {{ [key: string]: any }}
     * @restProps {div}
     *
     * @typedef {'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'ghost'} Color
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

    $: classNames = classes({
        prefix: 'badge',
        classProps: {
            color: {
                value: {
                    ...BrandColor,
                    ...FunctionalColor,
                    ...{ ghost: 'ghost' },
                },
            },
            size: { value: Size },
            outline: { value: 'outline' },
        },
        props: { color, size, outline },
        screen,
        restClass,
    });
</script>

<div class={classNames}>
    <slot />
</div>

<style lang="scss">
    @import 'Badge.scss';
</style>
