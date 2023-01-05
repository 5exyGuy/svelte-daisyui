<script lang="ts">
    import { joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLTableSectionElement> {}

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

    const PREFIX = 'dui-table-body';

    const classNames = joinClasses([PREFIX], [restClass]);
</script>

<tbody class={classNames} {...$$restProps}>
    <slot />
</tbody>

<style lang="scss" global>
    @import 'TableBody.scss';
</style>
