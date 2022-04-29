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

    const classNames = classes('table', {}, className);
</script>

<div class={classNames}>
    <slot />
</div>

<style global lang="scss">
    @import 'TableStyled.scss';
    @import 'TableUnstyled.scss';
</style>
