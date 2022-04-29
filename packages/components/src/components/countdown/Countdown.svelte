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

    $: classNames = classes('countdown', {}, className);
</script>

<span class={classNames}>
    <span style="--value:10;" />h
    <span style="--value:24;" />m
    <span style="--value:54;" />s
</span>

<style lang="scss">
    @import 'CountdownStyled.scss';
    @import 'CountdownUnstyled.scss';
</style>
