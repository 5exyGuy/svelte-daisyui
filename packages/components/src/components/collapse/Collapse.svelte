<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import { generateDefaultClasses, joinClasses } from '../../utilities';
    import { CollapseIcon } from './collapse-icon.enum';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        icon?: StringKeyOf<typeof CollapseIcon>;
        open?: boolean;
        close?: boolean;
    }
    interface $$ClassProps extends Pick<$$Props, 'icon' | 'open' | 'close'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let icon: $$Props['icon'] = undefined;
    export let open: $$Props['open'] = false;
    export let close: $$Props['close'] = false;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-collapse';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(
            PREFIX,
            { close: 'close', icon: CollapseIcon, open: 'open' },
            { close, icon, open },
        ),
        [restClass],
    );
</script>

<div tabindex="0" class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'Collapse.scss';
</style>
