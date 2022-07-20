<script lang="ts">
    import { joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLLIElement> {
        active: boolean;
        bordered: boolean;
        hoverable: boolean;
        disabled: boolean;
    }

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

    const PREFIX = 'dui-menu-item';

    $: classNames = joinClasses([PREFIX], [restClass]);
</script>

<li class={classNames} {...$$restProps}>
    <slot />
</li>

<style lang="scss" global>
    @import 'MenuItem.scss';
</style>
