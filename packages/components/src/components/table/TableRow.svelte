<script>
    import { classes } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    //  Type Definitions
    // -----------------------------------------------------------

    /**
     * @typedef {{ active?: boolean, hover?: boolean }} Properties
     * @typedef {{ sm?: Properties, md?: Properties, lg?: Properties, xl?: Properties, '2xl'?: Properties }} Screen
     */

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {Properties['active']}
     */
    export let active = false;

    /**
     * @type {Properties['hover']}
     */
    export let hover = false;

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
        prefix: 'table-row',
        classProps: {
            active: { value: 'active' },
            hover: { value: 'hover' },
        },
        props: { active, hover },
        screen,
        restClass,
    });
</script>

<tr class={classNames}>
    <slot />
</tr>
