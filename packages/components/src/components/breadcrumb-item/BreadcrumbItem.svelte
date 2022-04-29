<script>
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     * @type {string}
     */
    export let href;

    let className;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes('breadcrumb-item', {}, className);
</script>

<li class={classNames}>
    {#if href}
        <a {href}><slot /></a>
    {:else}
        <slot />
    {/if}
</li>

<style lang="scss">
    @import 'BreadcrumbItemStyled.scss';
    @import 'BreadcrumbItemUnstyled.scss';
</style>
