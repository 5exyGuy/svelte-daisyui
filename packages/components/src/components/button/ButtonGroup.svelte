<script lang="ts">
    import { joinClasses } from '../../utilities';
    import type { ButtonGroupProps } from './button-group-props.interface';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * A space-separated list of the classes of the element.
     */
    let restClass: ButtonGroupProps['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-button-group';

    $: classNames = joinClasses([PREFIX, restClass]);
</script>

<div class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'ButtonGroup.scss';
</style>
