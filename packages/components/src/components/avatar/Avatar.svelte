<script lang="ts">
    import { getContext, onMount } from 'svelte';
    import type { ClassesParams } from '../../interfaces';
    import { initMedia } from '../../utilities/screen-size.store';
    import { classes } from '../../utilities';
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

    /**
     *
     */
    // export let size: AvatarProps['size'] = undefined;

    let restClass: AvatarProps['class'] = undefined;
    /**
     *
     */
    export { restClass as class };

    // -----------------------------------------------------------
    // Screen
    // -----------------------------------------------------------

    /**
     * Responsive properties for the component.
     */
    export let screen: AvatarProps['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes
    // -----------------------------------------------------------

    $: classNames = classes<AvatarProps>({
        prefix: 'dui-avatar',
        propData: { status: AvatarStatus },
        propValues: { status },
        screen,
        restClass,
    } as ClassesParams<AvatarClassProps>);

    // -----------------------------------------------------------
    // Functionality
    // -----------------------------------------------------------

    initMedia();

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
