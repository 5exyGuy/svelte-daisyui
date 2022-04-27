<script lang="ts">
    import { Position, type PositionKey } from '$enums';

    // Props
    export let position: PositionKey = 'Bottom';
    export let end: boolean = false;
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('dropdown');
    classes.push(Position[position]);
    if (end) classes.push('dropdown-end');

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);
</script>

<div class={classes.join(' ')}>
    <slot name="dropdown-focus" />
    <div class="dropdown-content">
        <slot name="dropdown-content" />
        <slot />
    </div>
</div>

<style lang="less">
    @import 'Dropdown.less';
</style>
