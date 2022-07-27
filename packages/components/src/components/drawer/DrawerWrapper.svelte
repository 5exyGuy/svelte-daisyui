<script lang="ts">
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';
    import { generateDefaultClasses, joinClasses } from '../../utilities';
    import type { DrawerWrapperContext } from './drawer-wrapper-context.interface';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        fixed?: boolean;
    }
    interface $$ClassProps extends Pick<$$Props, 'fixed'> {
        opened?: boolean;
    }

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let fixed: $$Props['fixed'] = false;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-drawer-wrapper';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(PREFIX, { fixed: 'fixed', opened: 'open' }, { fixed, opened: $opened }),
        [restClass],
    );

    // -----------------------------------------------------------
    //                       Functionality
    // -----------------------------------------------------------

    const opened = writable(false);

    setContext<DrawerWrapperContext>(PREFIX, {
        opened,
    });
</script>

<div class={classNames} {...$$restProps}>
    <div tabindex="-1" class="dui-drawer-wrapper-overlay" />
    <slot />
</div>

<style lang="scss" global>
    @import 'DrawerWrapper.scss';
</style>
