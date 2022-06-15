<script lang="ts">
    import { getContext, onMount } from 'svelte';
    import type { ClassesParams } from '../../interfaces';
    import { classes } from '../../utils';
    import type { AvatarGroupContext } from './avatar-group-context.interface';
    import type { AvatarClassProps, AvatarProps } from './avatar-props.interface';
    import { AvatarStatus } from './avatar-status.enum';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     *
     */
    export let status: AvatarProps['status'] = undefined;

    let restClass: AvatarProps['class'] = undefined;
    /**
     *
     */
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes({
        prefix: 'dui-avatar',
        classProps: { status: { value: AvatarStatus } },
        props: { status },
        restClass,
    } as ClassesParams<AvatarClassProps>);

    // -----------------------------------------------------------
    // Functionality
    // -----------------------------------------------------------

    let ref: HTMLDivElement;

    const avatarGroup = getContext<AvatarGroupContext>('AvatarGroup');

    onMount(() => {
        if (avatarGroup) avatarGroup.add(ref);
    });
</script>

<div class={classNames} {...$$restProps} bind:this={ref}>
    <slot />
</div>

<style lang="scss" global>
    @import 'Avatar.scss';
</style>
