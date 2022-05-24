<script>
    import { classes } from '@svelte-daisyui/shared';
    import { ArtboardSize } from './artboard-size.enum';

    // -----------------------------------------------------------
    //  Type Definitions
    // -----------------------------------------------------------

    /**
     * @typedef {1 | 2 | 3 | 4 | 5 | 6} Size
     * @typedef {{ size?: Size, demo?: boolean, horizontal?: boolean }} Properties
     * @typedef {{ sm?: Properties, md?: Properties, lg?: Properties, xl?: Properties, '2xl'?: Properties }} Screen
     */

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {Size}
     */
    export let size = 1;

    /**
     * @type {boolean}
     */
    export let demo = false;

    /**
     * @type {boolean}
     */
    export let horizontal = false;

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
        prefix: 'artboard',
        classProps: {
            size: {
                value: ArtboardSize,
            },
            demo: {
                value: 'demo',
            },
            horizontal: {
                value: 'horizontal',
            },
        },
        props: { size, demo, horizontal },
        screen,
        restClass,
    });
</script>

<div class={classNames}>
    <slot />
</div>

<style lang="scss">
    @import 'ArtboardStyled.scss';
    @import 'ArtboardUnstyled.scss';
</style>
