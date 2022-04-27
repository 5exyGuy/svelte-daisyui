<script lang="ts">
    import type { Nullable } from '@eztrip/types';

    export let href: Nullable<string> = null;
    let className: string = '';
    export { className as class };

    const classes: string[] = [];

    classes.push('breadcrumb-item');

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    const finalClass = classes.join(' ');
</script>

<li class={finalClass}>
    {#if href}
        <a {href}><slot /></a>
    {:else}
        <slot />
    {/if}
</li>

<style global lang="less">
    @import 'BreadcrumbItem.less';
</style>
