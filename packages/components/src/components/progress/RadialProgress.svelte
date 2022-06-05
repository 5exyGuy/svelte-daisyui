<script>
    import { classes } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    //  Type Definitions
    // -----------------------------------------------------------

    /**
     * @slot {{ value: number }}
     * @restProps {div}
     */

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {number}
     */
    export let value = 0;

    let restClass = undefined;
    /**
     * @type {string}
     */
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes({ prefix: 'dui-radial-progress', restClass });
</script>

<div class={classNames} style={`--value:${value}`} {...$$restProps}>
    {#if $$slots.default}
        <slot {value} />
    {:else}
        {value}%
    {/if}
</div>

<style lang="scss">
    @import 'RadialProgress.scss';
</style>
