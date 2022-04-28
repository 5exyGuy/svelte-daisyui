<script>
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    let className;
    /**
     * @type {string | undefined}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    const classNames = classes('code', {}, className);
</script>

<div class={classNames}>
    <slot />
</div>

<style lang="scss">
    @import 'CodeStyled.scss';
    @import 'CodeUnstyled.scss';
</style>
