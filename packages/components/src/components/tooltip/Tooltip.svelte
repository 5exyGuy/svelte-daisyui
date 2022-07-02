<script lang="ts">
    import { joinClasses } from '../../utilities';
    import type { TooltipProps } from './tooltip-props.interface';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     *
     */
    let restClass: TooltipProps['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-tooltip';

    $: classNames = joinClasses([PREFIX, restClass]);
</script>

<div class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'Tooltip.scss';
</style>
