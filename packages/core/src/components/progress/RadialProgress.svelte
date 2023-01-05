<script lang="ts">
    import { joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends Omit<svelte.JSX.HTMLAttributes<HTMLProgressElement>, 'size'> {
        value?: number;
    }

    interface $$Events {}

    interface $$Slots {
        default: {
            value: number;
        };
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let value: $$Props['value'] = 0;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-radial-progress';

    $: classNames = joinClasses([PREFIX], [restClass]);
</script>

<div class={classNames} style={`--value:${value}`} {...$$restProps}>
    {#if $$slots.default}
        <slot {value} />
    {:else}
        {value}%
    {/if}
</div>

<style lang="scss" global>
    @import 'RadialProgress.scss';
</style>
