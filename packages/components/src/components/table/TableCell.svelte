<script>
    import { classes, HorizontalAlignment } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    //  Type Definitions
    // -----------------------------------------------------------

    /**
     * @typedef {'start' | 'center' | 'end'} HorizontalAlignment
     * @typedef {{ alignment?: HorizontalAlignment }} Properties
     * @typedef {{ sm?: Properties, md?: Properties, lg?: Properties, xl?: Properties, '2xl'?: Properties }} Screen
     */

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {Properties['alignment']}
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

    const classNames = classes({
        prefix: 'table-cell',
        classProps: {
            alignment: { value: HorizontalAlignment },
        },
        props: { alignment },
        screen,
        restClass,
    });
</script>

<td class={classNames}>
    <slot />
</td>

<style lang="scss">
    @import 'TableCell.scss';
</style>
