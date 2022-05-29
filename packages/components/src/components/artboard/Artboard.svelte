<script>
    import { classes, ArtboardSize, Alignment } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    //  Type Definitions
    // -----------------------------------------------------------

    /**
     * @slot {{ props: { [key: string]: any } }}
     * @restProps {div}
     *
     * @typedef {1 | 2 | 3 | 4 | 5 | 6} Size
     * @typedef {'horizontal' | 'vertical'} Alignment
     * @typedef {{ size?: Size, demo?: boolean, alignment?: Alignment }} Properties
     * @typedef {{ sm?: Properties, md?: Properties, lg?: Properties, xl?: Properties, '2xl'?: Properties }} Screen
     */

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {Size}
     */
    export let size = undefined;

    /**
     * @type {boolean}
     */
    export let demo = false;

    /**
     * @type {Alignment}
     */
    export let alignment = undefined;

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
            size: { value: ArtboardSize },
            demo: { value: 'demo' },
            alignment: { value: Alignment },
        },
        props: { size, demo, alignment },
        screen,
        restClass,
    });
</script>

<div class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss">
    @import 'Artboard.scss';
</style>
