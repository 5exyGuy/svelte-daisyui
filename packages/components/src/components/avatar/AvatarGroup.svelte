<script lang="ts">
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';
    import { createResponsiveProperties, joinClasses } from '../../utilities';
    import type { AvatarGroupProps, AvatarGroupResponsiveProps } from './avatar-group-props';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     *
     */
    export let space: AvatarGroupProps['space'] = '-1.5rem';

    let restClass: AvatarGroupProps['class'] = undefined;
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
    export let screen: AvatarGroupProps['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-avatar-group';

    $: classNames = joinClasses([PREFIX], [restClass]);

    // -----------------------------------------------------------
    // Functionality
    // -----------------------------------------------------------

    const { update, space: _space } = createResponsiveProperties<AvatarGroupResponsiveProps>({ space }, screen, {
        space: true,
    });
    $: space && update({ space }, screen);

    const avatars = writable([]);
    setContext('AvatarGroup', {
        avatars,
        add: (ref: HTMLDivElement) => {
            avatars.update((_) => [..._, { ref, index: _.length }]);
            ref.style.zIndex = String($avatars.length);
        },
    });
</script>

<div class={classNames} style:--avatar-group-x-space={$_space}>
    <slot />
</div>

<style lang="scss" global>
    @import 'AvatarGroup.scss';
</style>
