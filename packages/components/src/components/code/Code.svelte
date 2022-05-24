<script>
    import { classes } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    let restClass;
    /**
     * @type {string}
     */
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes({ prefix: 'code', restClass });
</script>

<div class={classNames}>
    <slot />
</div>

<style lang="scss">
    @import 'CodeStyled.scss';
    @import 'CodeUnstyled.scss';
</style>
