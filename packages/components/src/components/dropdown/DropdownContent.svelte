<script lang="ts">
    import { joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {}

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

    const PREFIX = 'dui-dropdown-content';

    $: classNames = joinClasses([PREFIX], [restClass]);
</script>

<div tabindex="0" class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'DropdownContent.scss';
</style>
