<script lang="ts">
    // Props
    export let active: boolean = false;
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('tab');
    if (active) classes.push('tab-active');

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    const finalClass = classes.join(' ');
</script>

<div tabindex="0" class={finalClass}>
    <slot />
</div>

<style global lang="less">
    @import 'TabItem.less';
</style>
