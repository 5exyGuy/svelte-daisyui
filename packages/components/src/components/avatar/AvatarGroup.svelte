<script>
    import { classes } from '@svelte-daisyui/shared';
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';

    // -----------------------------------------------------------
    //  Type Definitions
    // -----------------------------------------------------------

    /**
     * @restProps {div}
     */

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {string}
     */
    export let space = '-1.5rem';

    /**
     * @type {import('./Avatar.svelte').AvatarProps}
     */
    export let avatar = {};

    let restClass = undefined;
    /**
     * @type {string}
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
        add: (ref) => {
            avatars.update((_) => [..._, { ref, index: _.length }]);
            ref.style.zIndex = $avatars.length;
        },
    });
</script>

<div class={classNames} style={`--avatar-group-x-space:${space}`}>
    <slot />
</div>

<style lang="scss" global>
    @import 'AvatarGroup.scss';
</style>
