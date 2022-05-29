<script>
    import { classes } from '@svelte-daisyui/shared';
    import BreadcrumbItem from './BreadcrumbItem.svelte';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    /**
     * @slot {{ props: { [key: string]: any } }}
     * @slot {{ props: { item: BreadcrumbItem } }} item
     * @restProps {div}
     *
     * @typedef {{ text?: string, href?: string }} BreadcrumbItem
     */

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {Array<BreadcrumbItem>}
     */
    export let items = undefined;

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
</div>

<style lang="scss">
    @import 'BreadcrumbGroup.scss';
</style>
