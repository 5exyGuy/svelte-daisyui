<script lang="ts">
    import { SvelteComponent } from 'svelte';
    import { Maybe } from '../utils/maybe.type';

    // Props
    export let component: Maybe<typeof SvelteComponent> = null;
    export let size: Maybe<number> = null;
    export let height: number = 1;
    export let width: number = 1;
    export let spin: boolean = false;
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('icon');
    if (spin) classes.push('icon-spin');

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    const finalClass = classes.join(' ');
</script>

<div class={finalClass} style={`height: ${size ?? height}rem; width: ${size ?? width}rem;`}>
    {#if component}
        <svelte:component this={component} />
    {:else}
        <slot />
    {/if}
</div>

<style lang="less">
    @import 'Icon.less';
</style>
