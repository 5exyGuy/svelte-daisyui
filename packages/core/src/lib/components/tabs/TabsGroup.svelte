<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import { Size } from '../../enums';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';
    import { TabsGroupType } from './tabs-group-type.enum';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends Omit<svelte.JSX.HTMLAttributes<HTMLDivElement>, 'size'> {
        type?: StringKeyOf<typeof TabsGroupType>;
        size?: StringKeyOf<typeof Size>;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'type' | 'size'> {}
    interface $$ClassProps extends Pick<$$Props, 'type' | 'size'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let type: $$Props['type'] = undefined;
    export let size: $$Props['size'] = 'md';
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-tabs-group';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(PREFIX, { type: TabsGroupType, size: Size }, { type, size }),
        generateResponsiveClasses<$$ResponsiveProps>(PREFIX, { type: TabsGroupType, size: Size }, screen, {
            type: true,
            size: true,
        }),
        [restClass],
    );
</script>

<div class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'TabsGroup.scss';
</style>
