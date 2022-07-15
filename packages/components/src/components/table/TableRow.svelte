<script lang="ts">
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLTableRowElement> {
        active?: boolean;
        hover?: boolean;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'active' | 'hover'> {}
    interface $$ClassProps extends Pick<$$Props, 'active' | 'hover'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let active: $$Props['active'] = false;
    export let hover: $$Props['hover'] = false;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-table-row';

    const classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(PREFIX, { active: 'active', hover: 'hover' }, { active, hover }),
        generateResponsiveClasses<$$ResponsiveProps>(PREFIX, { active: 'active', hover: 'hover' }, screen, {
            active: true,
            hover: true,
        }),
        [restClass],
    );
</script>

<tr class={classNames} {...$$restProps}>
    <slot />
</tr>

<style lang="scss" global>
    @import 'TableRow.scss';
</style>
