<script lang="ts">
    import { generateDefaultClasses, joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLLIElement> {
        active?: boolean;
        hoverActive?: boolean;
        bordered?: boolean;
        hoverBordered?: boolean;
        disabled?: boolean;
    }
    interface $$ClassProps extends Pick<$$Props, 'active' | 'bordered' | 'hoverActive' | 'hoverBordered'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let active: $$Props['active'] = false;
    export let hoverActive: $$Props['hoverActive'] = false;
    export let bordered: $$Props['bordered'] = false;
    export let hoverBordered: $$Props['hoverBordered'] = false;
    export let disabled: $$Props['disabled'] = false;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-menu-item';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(
            PREFIX,
            { active: 'active', bordered: 'bordered', hoverActive: 'hover-active', hoverBordered: 'hover-bordered' },
            { active, bordered, hoverActive, hoverBordered },
        ),
        [restClass],
    );

    // -----------------------------------------------------------
    // Functionality
    // -----------------------------------------------------------

    function onClick(event: MouseEvent) {
        event.preventDefault();
    }
</script>

<li class={classNames} {disabled} {...$$restProps} on:click>
    <slot />
</li>

<style lang="scss" global>
    @import 'MenuItem.scss';
</style>
