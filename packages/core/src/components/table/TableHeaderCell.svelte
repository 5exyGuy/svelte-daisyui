<script lang="ts">
    import { joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLTableHeaderCellElement> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    let restClass: $$Props['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-table-header-cell';

    const classNames = joinClasses([PREFIX], [restClass]);
</script>

<th class={classNames} {...$$restProps}>
    <slot />
</th>

<style lang="scss" global>
    @import 'TableHeaderCell.scss';
</style>
