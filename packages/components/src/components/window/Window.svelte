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

    $: classNames = classes('window', {}, className);
</script>

<div class={classNames}>
    <slot />
</div>

<style lang="scss">
    @import 'WindowStyled.scss';
    @import 'WindowUnstyled.scss';
</style>
