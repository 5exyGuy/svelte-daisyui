<script lang="ts">
    import { BadgeSize } from './badge-size.enum';
    import { BadgeType } from './badge-type.enum';

    export let type: BadgeType | undefined = undefined;
    export let size: BadgeSize = BadgeSize.Medium;
    export let outline: boolean = false;
    let className: string = '';
    export { className as class };

    const classes: string[] = [];

    classes.push('badge');
    if (type) classes.push(`badge-${type}`);
    classes.push(`badge-${size}`);
    if (outline) classes.push('badge-outline');

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);
</script>

<div class={classes.join(' ')}>
    <slot />
</div>

<style lang="less">
    @import 'Badge.less';
</style>
