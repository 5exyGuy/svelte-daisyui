<script lang="ts">
    import { joinClasses } from '../../utilities';
    import type { BreadcrumbItemProps } from './breadcrumb-item-props.interface';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let href: BreadcrumbItemProps['href'] = undefined;

    /**
     * A space-separated list of the classes of the element.
     */
    let restClass: BreadcrumbItemProps['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-breadcrumb-item';

    $: classNames = joinClasses([PREFIX, restClass]);
</script>

<li class={classNames} on:click>
    {#if href}
        <a {href}><slot /></a>
    {:else}
        <slot />
    {/if}
</li>

<style lang="scss" global>
    @import 'BreadcrumbItem.scss';
</style>
