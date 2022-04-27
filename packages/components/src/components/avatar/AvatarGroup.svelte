<script lang="ts">
    // Props
    export let space: string = '1.5rem';
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('avatar-group');

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);
</script>

<div class={classes.join(' ')} style={`--avatar-group-x-space:${space}`}>
    <slot />
</div>

<style lang="less">
    @import 'AvatarGroup.less';
</style>
