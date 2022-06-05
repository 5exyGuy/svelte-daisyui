<script>
    import {
        BrandColor,
        classes,
        FunctionalColor,
    } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    //  Type Definitions
    // -----------------------------------------------------------

    /**
     * @restProps {a}
     *
     * @typedef {'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'neutral'} Color
     * @typedef {{ color?: Color, hover?: boolean }} Properties
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
    export let hover = false;

    /**
     * @type {string}
     */
    export let href = '#';

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
        prefix: 'link',
        classProps: {
            color: {
                value: {
                    ...BrandColor,
                    ...FunctionalColor,
                    ...{ neutral: 'neutral' },
                },
            },
            hover: { value: 'hover' },
        },
        props: { color, hover },
        screen,
        restClass,
    });
</script>

<a {href} class={classNames} {...$$restProps}>
    <slot />
</a>

<style lang="scss">
    @import 'Link.scss';
</style>
