<script>
    import { classes } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    let restClass = undefined;
    /**
     * @type {string}
     */
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const classNames = classes({ prefix: 'table-cell', restClass });
</script>

<td class={classNames}>
    <slot />
</td>

<style lang="scss">
    @import 'TableCell.scss';
</style>
