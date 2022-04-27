<script lang="ts">
    // Props
    export let value: number = 0;
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('radial-progress');

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    const finalClass = classes.join(' ');
</script>

<div class={finalClass} style={`--value:${value}`}>
    {#if $$slots.default}
        <slot />
    {:else}
        {value}%
    {/if}
</div>

<style global lang="less">
    @import 'RadialProgress.less';
</style>
