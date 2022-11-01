<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import { HorizontalAlignment } from '../../enums';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLTableRowElement> {
        alignment?: StringKeyOf<typeof HorizontalAlignment>;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'alignment'> {}
    interface $$ClassProps extends Pick<$$Props, 'alignment'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let alignment = undefined;
    let restClass = undefined;
    export { restClass as class };
    export let screen = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-table-cell';

    const classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(PREFIX, { alignment: HorizontalAlignment }, { alignment }),
        generateResponsiveClasses<$$ResponsiveProps>(PREFIX, { alignment: HorizontalAlignment }, screen, {
            alignment: true,
        }),
        [restClass],
    );
</script>

<td class={classNames} {...$$restProps}>
    <slot />
</td>

<style lang="scss" global>
    @import 'TableCell.scss';
</style>
