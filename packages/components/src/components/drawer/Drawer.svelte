<script lang="ts">
    import { beforeUpdate, getContext, onMount } from 'svelte';
    import type { StringKeyOf } from 'type-fest';
    import { Position } from '../../enums';
    import { generateDefaultClasses, joinClasses } from '../../utilities';
    import type { DrawerWrapperContext } from './drawer-wrapper-context.interface';
    import { focusTrap } from '../../actions';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        position?: StringKeyOf<typeof Position>;
        opened?: boolean;
        closeOnBlur?: boolean;
    }
    interface $$ClassProps extends Pick<$$Props, 'position'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let position: $$Props['position'] = 'left';
    export let opened: $$Props['opened'] = false;
    export let closeOnBlur: $$Props['closeOnBlur'] = false;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-drawer-side';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(PREFIX, { position: Position }, { position }),
        [restClass],
    );

    // -----------------------------------------------------------
    //                       Functionality
    // -----------------------------------------------------------

    // TODO: Sometimes opened variable is not updated when the button is clicked.
    const { changeVisibility, onVisibilityChange } = getContext<DrawerWrapperContext>('dui-drawer-wrapper');

    onMount(() => changeVisibility(opened));
    beforeUpdate(() => changeVisibility(opened));
    onVisibilityChange((_opened) => (opened = _opened));
</script>

<div class={classNames} data-opened={opened} use:focusTrap={{ enabled: opened }} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'Drawer.scss';
</style>
