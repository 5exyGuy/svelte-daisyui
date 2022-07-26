<script lang="ts">
    import { setContext } from 'svelte';
    import { joinClasses } from '../../utilities';
    import type { DrawerWrapperContext } from './drawer-wrapper-context.interface';

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

    const PREFIX = 'dui-drawer-wrapper';

    $: classNames = joinClasses([PREFIX], [restClass]);

    // -----------------------------------------------------------
    //                       Functionality
    // -----------------------------------------------------------

    setContext<DrawerWrapperContext>('drawer-wrapper', {});
</script>

<div class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'DrawerWrapper.scss';
</style>
