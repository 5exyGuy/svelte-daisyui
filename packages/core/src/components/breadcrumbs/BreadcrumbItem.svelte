<script lang="ts">
    import { joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLLIElement> {
        href?: string;
    }

    interface $$Events {
        click: MouseEvent;
    }

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let href: $$Props['href'] = undefined;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-breadcrumb-item';

    $: classNames = joinClasses([PREFIX, restClass]);
</script>

<li class={classNames} on:click {...$$restProps}>
    {#if href}
        <a {href}><slot /></a>
    {:else}
        <slot />
    {/if}
</li>

<style lang="scss" global>
    @import 'BreadcrumbItem.scss';
</style>
