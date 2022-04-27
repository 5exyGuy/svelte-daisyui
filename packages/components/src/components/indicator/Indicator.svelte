<script lang="ts">
    // Props
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('indicator');

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    const finalClass = classes.join(' ');
</script>

<div class={finalClass}>
    <slot />
</div>

<style global lang="less">
    @import 'Indicator.less';
</style>
