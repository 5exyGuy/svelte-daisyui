<script lang="ts">
    import { onMount } from 'svelte';

    import type { StringKeyOf } from 'type-fest';
    import { Position } from '../../enums';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        position?: StringKeyOf<typeof Position>;
        end?: boolean;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'position' | 'end'> {}
    interface $$ClassProps extends Pick<$$Props, 'position' | 'end'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let position: $$Props['position'] = 'bottom';
    export let end: $$Props['end'] = false;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Functions
    // -----------------------------------------------------------

    export function open() {}
    export function close() {}

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-dropdown';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(PREFIX, { end: 'end', position: Position }, { end, position }),
        generateResponsiveClasses<$$ResponsiveProps>(PREFIX, { end: 'end', position: Position }, screen, {
            end: true,
            position: true,
        }),
        [restClass],
    );

    // -----------------------------------------------------------
    // Functionality
    // -----------------------------------------------------------

    onMount(() => {});

    const processClick = (event: MouseEvent) => {
        console.log(event);
    };
</script>

<div class={classNames} {...$$restProps} on:click={processClick}>
    <slot />
</div>

<style lang="scss" global>
    @import 'Dropdown.scss';
</style>
