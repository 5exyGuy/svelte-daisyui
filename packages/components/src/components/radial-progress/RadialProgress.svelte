<script>
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     * @type {number}
     */
    export let value = 0;

    let className;
    /**
     * @type {string | undefined}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes('radial-progress', {}, className);
</script>

<div class={classNames} style={`--value:${value}`}>
    {#if $$slots.default}
        <slot />
    {:else}
        {value}%
    {/if}
</div>

<style lang="scss">
    @import 'RadialProgressStyled.scss';
    @import 'RadialProgressUnstyled.scss';
</style>
