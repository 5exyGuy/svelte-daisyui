<script lang="ts">
    let className: string = '';
    export { className as class };

    const classes: string[] = [];

    classes.push('breadcrumbs');

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    const finalClass = classes.join(' ');
</script>

<div class={finalClass}>
    <ul>
        <slot />
    </ul>
</div>

<style global lang="less">
    @import 'Breadcrumbs.less';
</style>
