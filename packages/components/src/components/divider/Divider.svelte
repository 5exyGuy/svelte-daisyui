<script>
    import { classes, Alignment } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    //  Type Definitions
    // -----------------------------------------------------------

    /**
     * @restProps {div}
     *
     * @typedef {'vertical' | 'horizontal'} Alignment
     * @typedef {{ alignment?: Alignment }} Properties
     * @typedef {{ sm?: Properties, md?: Properties, lg?: Properties, xl?: Properties, '2xl'?: Properties }} Screen
     */

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {Alignment}
     */
    export let alignment = 'vertical';

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
        prefix: 'dui-divider',
        classProps: { alignment: { value: Alignment } },
        props: { alignment },
        screen,
        restClass,
    });
</script>

<div class={classNames}>
    <slot />
</div>

<style lang="scss" global>
    @import 'Divider.scss';
</style>
