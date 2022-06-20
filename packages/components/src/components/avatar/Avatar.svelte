<script lang="ts">
    import { beforeUpdate, getContext, onMount } from 'svelte';
    import {
        createResponsiveProperties,
        generateDefaultClasses,
        generateResponsiveClasses,
        joinClasses,
    } from '../../utilities/component.utility';
    import type { AvatarGroupContext } from './avatar-group-context.interface';
    import type { AvatarClassProps, AvatarProps, AvatarResponsiveProps } from './avatar-props.interface';
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
    export let size: AvatarProps['size'] = '6rem';

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

    $: classNames = joinClasses(
        generateDefaultClasses<AvatarClassProps>('dui-avatar', { status: AvatarStatus }, { status }),
        [restClass],
    );

    // -----------------------------------------------------------
    // Functionality
    // -----------------------------------------------------------

    const { update, size: _size } = createResponsiveProperties<AvatarResponsiveProps>({ size }, screen, ['size']);
    $: size && screen && update({ size }, screen);

    let ref: HTMLDivElement;

    const avatarGroup = getContext<AvatarGroupContext>('AvatarGroup');

    onMount(() => {
        if (avatarGroup) avatarGroup.add(ref);
    });
</script>

<div class={classNames} {...$$restProps} style:width={$_size} style:height={$_size} bind:this={ref}>
    <slot />
</div>

<style lang="scss" global>
    @import 'Avatar.scss';
</style>
