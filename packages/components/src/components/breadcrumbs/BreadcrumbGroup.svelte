<script lang="ts">
    import { joinClasses } from '../../utilities';
    import BreadcrumbItem from './BreadcrumbItem.svelte';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    type T = $$Generic<{ text?: string; href?: string }>;

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLUListElement> {
        items?: Array<T>;
    }

    interface $$Events {}

    interface $$Slots {
        default: {};
        item: {
            item: T;
        };
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let items: $$Props['items'] = undefined;
    let restClass: $$Props['class'] = undefined;
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
