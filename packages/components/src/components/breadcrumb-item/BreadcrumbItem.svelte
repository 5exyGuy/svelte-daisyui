<script>
    import { classes } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {string}
     */
    export let href = undefined;

    let restClass = undefined;
    /**
     * @type {string}
     */
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes({ prefix: 'breadcrumb-item', restClass });
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
