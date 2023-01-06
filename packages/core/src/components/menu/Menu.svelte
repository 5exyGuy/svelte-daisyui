<script lang="ts">
    import type { CSSUnit } from '@svelte-daisyui/shared';
    import type { StringKeyOf } from 'type-fest';
    import { Alignment } from '../../enums';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLUListElement> {
        alignment?: StringKeyOf<typeof Alignment>;
        rounded?: boolean;
        padding?: CSSUnit;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'alignment' | 'rounded'> {}
    interface $$ClassProps extends Pick<$$Props, 'alignment' | 'rounded'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let alignment: $$Props['alignment'] = 'vertical';
    export let rounded: $$Props['rounded'] = false;
    export let padding: $$Props['padding'] = undefined;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-menu';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(
            PREFIX,
            { alignment: Alignment, rounded: 'rounded' },
            { alignment, rounded },
        ),
        generateResponsiveClasses<$$ResponsiveProps>(PREFIX, { alignment: Alignment }, screen, {
            alignment: true,
            rounded: true,
        }),
        [restClass],
    );

    // -----------------------------------------------------------
    // Functionality
    // -----------------------------------------------------------

    // const dispatch = createEventDispatcher();
    // const menuItems =

    // setContext('menu', {

    // });
</script>

<ul style:padding data-padding={padding} class={classNames} {...$$restProps}>
    <slot />
</ul>

<style lang="scss" global>
    @import 'Menu.scss';
</style>
