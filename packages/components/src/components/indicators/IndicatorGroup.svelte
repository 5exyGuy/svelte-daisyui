<script>
    import { classes } from '../../utilities';

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

    $: classNames = classes('indicator-group', {}, className);
</script>

<div class={classNames}>
    <slot />
</div>

<style lang="scss">
    @import 'IndicatorGroupStyled.scss';
    @import 'IndicatorGroupUnstyled.scss';
</style>
