<script lang="ts">
    import { joinClasses } from '../../utilities';
    import type { BreadcrumbGroupProps } from './breadcrumb-group-props.interface';
    import BreadcrumbItem from './BreadcrumbItem.svelte';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     *
     */
    export let items: BreadcrumbGroupProps['items'] = undefined;

    /**
     * A space-separated list of the classes of the element.
     */
    let restClass: BreadcrumbGroupProps['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-breadcrumb-group';

    $: classNames = joinClasses([PREFIX, restClass]);
</script>

<ul class={classNames} {...$$restProps}>
    {#if $$slots.default}
        <slot />
    {:else if items}
        {#each items as item}
            <slot name="item" {item}>
                <BreadcrumbItem href={item.href}>
                    {item.text}
                </BreadcrumbItem>
            </slot>
        {/each}
    {/if}
</ul>

<style lang="scss" global>
    @import 'BreadcrumbGroup.scss';
</style>
