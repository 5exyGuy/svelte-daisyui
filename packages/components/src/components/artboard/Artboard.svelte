<script>
    import { classes } from '@svelte-daisyui/shared';
    import { ArtboardSize } from './artboard-size.enum';

    // -----------------------------------------------------------
    //  Type Definitions
    // -----------------------------------------------------------

    /**
     * @typedef {'1' | '2' | '3' | '4' | '5' | '6' | 1 | 2 | 3 | 4 | 5 | 6} Size
     * @typedef {{ size?: Size, demo?: boolean, horizontal?: boolean }} ScreenProps
     * @typedef {{ sm?: ScreenProps, md?: ScreenProps, lg?: ScreenProps, xl?: ScreenProps, '2xl'?: ScreenProps }} Screen
     */

    // -----------------------------------------------------------
    // Props
    // -----------------------------------------------------------

    /**
     * @type {Size}
     */
    export let size = '1';

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

    $: classNames = classes(
        'artboard',
        {
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
        restClass,
        { size, demo, horizontal },
        screen,
    );
</script>

<div class={classNames}>
    <slot />
</div>

<style lang="scss">
    @import 'ArtboardStyled.scss';
    @import 'ArtboardUnstyled.scss';
</style>
