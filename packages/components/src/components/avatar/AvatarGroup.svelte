<script>
    import { classes } from '@svelte-daisyui/shared';

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
    export let space = '1.5rem';

    let restClass = undefined;
    /**
     * @type {string}
     */
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes({ prefix: 'avatar-group', restClass });
</script>

<div class={classNames} style={`--avatar-group-x-space:${space}`}>
    <slot />
</div>

<style lang="scss">
    @import 'AvatarGroup.scss';
</style>
