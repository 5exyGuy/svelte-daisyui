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

    const classNames = classes({ prefix: 'table-header-cell', restClass });
</script>

<th class={classNames}>
    <slot />
</th>

<style lang="scss">
    @import 'TableHeaderCell.scss';
</style>
