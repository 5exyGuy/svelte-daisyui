<script lang="ts">
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';
    import { classes } from '../../utilities';
    import type { AvatarGroupProps } from './avatar-group-props';

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
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes({ prefix: 'dui-avatar-group', restClass });

    // -----------------------------------------------------------
    // Functionality
    // -----------------------------------------------------------

    const avatars = writable([]);
    setContext('AvatarGroup', {
        avatars,
        add: (ref: HTMLDivElement) => {
            avatars.update((_) => [..._, { ref, index: _.length }]);
            ref.style.zIndex = String($avatars.length);
        },
    });
</script>

<div class={classNames} style={`--avatar-group-x-space:${space}`}>
    <slot />
</div>

<style lang="scss" global>
    @import 'AvatarGroup.scss';
</style>
