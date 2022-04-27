<script lang="ts">
    // Props
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('collapse');

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    const finalClass = classes.join(' ');
</script>

<div tabindex="0" class={finalClass}>
    {#if $$slots.title}
        <div class="collapse-title">
            <slot name="title" />
        </div>
    {/if}
    {#if $$slots.content}
        <div class="collapse-content">
            <slot name="content" />
        </div>
    {/if}
</div>

<style global lang="less">
    @import 'Collapse.less';
</style>
