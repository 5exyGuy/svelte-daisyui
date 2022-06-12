<script>
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    let className = undefined;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes('menu-item', {}, className);
</script>

<div class={classNames}>
    <slot />
</div>

<style lang="scss">
    @import 'MenuItemStyled.scss';
    @import 'MenuItemUnstyled.scss';
</style>
