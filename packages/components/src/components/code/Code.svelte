<script>
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    let className;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes('code', {}, className);
</script>

<div class={classNames}>
    <slot />
</div>

<style lang="scss">
    @import 'CodeStyled.scss';
    @import 'CodeUnstyled.scss';
</style>
