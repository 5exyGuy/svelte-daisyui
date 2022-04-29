<script lang="ts">
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    export let space: string = '1.5rem';
    let className: string = '';
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes('avatar-group', {}, className);
</script>

<div class={classNames} style={`--avatar-group-x-space:${space}`}>
    <slot />
</div>

<style lang="scss">
    @import 'AvatarGroupStyled.scss';
    @import 'AvatarGroupUnstyled.scss';
</style>
