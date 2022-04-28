<script>
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    let className = '';
    /**
     * @type {string | undefined}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    const classNames = classes('breadcrumb-group', {}, className);
</script>

<div class={classNames}>
    <ul>
        <slot />
    </ul>
</div>

<style lang="scss">
    @import 'BreadcrumbGroupStyled.scss';
    @import 'BreadcrumbGroupUnstyled.scss';
</style>
