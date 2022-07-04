<script lang="ts">
    import { setContext } from 'svelte';
    import { createResponsiveProperties, joinClasses } from '../../utilities';
    import type { AvatarGroupContext } from './avatar-group-context.interface';
    import type { AvatarGroupProps, AvatarGroupResponsiveProps } from './avatar-group-props.interface';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @default '-1.5rem'
     */
    export let space: AvatarGroupProps['space'] = '-1.5rem';

    /**
     * A space-separated list of the classes of the element.
     * @default undefined
     */
    let restClass: AvatarGroupProps['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Screen
    // -----------------------------------------------------------

    /**
     * Responsive properties for the component.
     * @default undefined
     */
    export let screen: AvatarGroupProps['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-avatar-group';

    $: classNames = joinClasses([PREFIX], [restClass]);

    // -----------------------------------------------------------
    // Functionality
    // -----------------------------------------------------------

    const result = createResponsiveProperties<AvatarGroupResponsiveProps>({ space }, screen, {
        space: true,
    });
    const { space: _space } = result;

    $: space && screen && result.update({ space }, screen);

    const avatars = [] as Array<HTMLDivElement>;
    setContext<AvatarGroupContext>('AvatarGroup', {
        add: (ref: HTMLDivElement) => {
            avatars.push(ref);

            avatars.forEach((avatarRef, index) => {
                // avatarRef.style.zIndex = String(avatars.length - 1 - index);
                avatarRef.style.zIndex = String(index);
            });
        },
    });
</script>

<div class={classNames} style:--avatar-group-x-space={$_space} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'AvatarGroup.scss';
</style>
