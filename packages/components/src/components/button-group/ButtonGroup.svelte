<script lang="ts">
    let className: string = '';
    export { className as class };

    const classes: string[] = [];

    classes.push('btn-group');

    $: classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);
</script>

<div class={classes.join(' ')}>
    <slot />
</div>

<style lang="scss">
    @import 'ButtonGroup.scss';
</style>
