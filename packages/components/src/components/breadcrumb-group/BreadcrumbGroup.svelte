<script>
    import { classes } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    let restClass = undefined;
    /**
     * @type {string}
     */
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes({ prefix: 'breadcrumb-group', restClass });
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
