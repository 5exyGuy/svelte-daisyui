<script lang="ts">
    import { generateDefaultClasses, joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        active?: boolean;
    }
    interface $$ClassProps extends Pick<$$Props, 'active'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let active: $$Props['active'] = false;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-tabs-item';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(PREFIX, { active: 'active' }, { active }),
        [restClass],
    );
</script>

<div tabindex="0" class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'TabsItem.scss';
</style>
