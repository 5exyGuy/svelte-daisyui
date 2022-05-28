<script>
    import { classes, Size } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    //  Type Definitions
    // -----------------------------------------------------------

    /**
     * @slot {{ props: { [key: string]: any } }}
     * @restProps {kbd}
     *
     * @typedef {'xs' | 'sm' | 'md' | 'lg'} Size
     * @typedef {{ size?: Size }} Properties
     * @typedef {{ sm?: Properties, md?: Properties, lg?: Properties, xl?: Properties, '2xl'?: Properties }} Screen
     */

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {Size}
     */
    export let size = undefined;

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
        prefix: 'kbd',
        classProps: {
            size: {
                value: Size,
            },
        },
        props: { size },
        screen,
        restClass,
    });
</script>

<kbd class={classNames} {...$$restProps}>
    <slot />
</kbd>

<style lang="scss">
    @import 'Kbd.scss';
</style>
