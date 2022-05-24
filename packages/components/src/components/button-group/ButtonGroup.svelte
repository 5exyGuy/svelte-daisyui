<script lang="ts">
    import { classes } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    let restClass = undefined;
    /**
     * @type {string}
     */
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes({ prefix: 'btn-group', restClass });
</script>

<div class={classNames}>
    <slot />
</div>

<style lang="scss">
    @import 'ButtonGroupStyled.scss';
    @import 'ButtonGroupUnstyled.scss';
</style>
