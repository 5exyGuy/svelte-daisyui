<script>
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    let className;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes('breadcrumb-group', {}, className);
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
