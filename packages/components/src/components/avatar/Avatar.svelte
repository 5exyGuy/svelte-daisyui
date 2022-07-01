<script lang="ts">
    import { getContext, onMount } from 'svelte';
    import { createResponsiveProperties, generateDefaultClasses, joinClasses } from '../../utilities/component.utility';
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

    /**
     *
     */
    export let placeholder: AvatarProps['placeholder'] = false;

    /**
     * A space-separated list of the classes of the element.
     */
    let restClass: AvatarProps['class'] = undefined;
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

    const PREFIX = 'dui-avatar';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<AvatarClassProps>(
            PREFIX,
            { status: AvatarStatus, placeholder: 'placeholder' },
            { status, placeholder },
        ),
        [restClass],
    );

    // -----------------------------------------------------------
    // Functionality
    // -----------------------------------------------------------

    const { update, size: _size } = createResponsiveProperties<AvatarResponsiveProps>({ size }, screen, { size: true });
    $: size && update({ size }, screen);

    let ref: HTMLDivElement;

    const avatarGroup = getContext<AvatarGroupContext>('AvatarGroup');

    onMount(() => {
        avatarGroup && avatarGroup.add(ref);
    });
</script>

<div class={classNames} style:width={$_size} style:height={$_size} bind:this={ref} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'Avatar.scss';
</style>
