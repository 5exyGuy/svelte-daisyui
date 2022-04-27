<script lang="ts">
    import { Maybe } from '../maybe.type';
    import { AvatarSize } from './avatar-size.enum';
    import { AvatarStatus } from './avatar-status.enum';

    // Props
    export let src: Maybe<string> = null;
    export let size: keyof typeof AvatarSize | number | string = 'Medium';
    export let status: Maybe<keyof typeof AvatarStatus> = null;
    let className: string = '';
    export { className as class };

    // Classes
    const classes: string[] = [];

    classes.push('avatar');
    if (size && typeof size !== 'number' && AvatarSize[size]) classes.push(AvatarSize[size]);
    if (status) classes.push(status);

    const classNames = className.length > 0 ? className.split(' ') : [];
    classes.push(...classNames);

    const style: Maybe<string> = typeof size === 'number' ? `width:${size}rem;height:${size}rem;` : null;
</script>

<div class={classes.join(' ')} {style}>
    {#if src}
        <img alt="" {src} />
    {:else}
        <slot />
    {/if}
</div>

<style lang="less">
    @import 'Avatar.less';
</style>
