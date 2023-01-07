<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import { Alignment, Size } from '../../enums';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends Omit<svelte.JSX.HTMLAttributes<HTMLDivElement>, 'size'> {
        alignment?: StringKeyOf<typeof Alignment>;
        size?: StringKeyOf<typeof Size>;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'alignment' | 'size'> {}
    interface $$ClassProps extends Pick<$$Props, 'alignment' | 'size'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let alignment: $$Props['alignment'] = 'horizontal';
    export let size: $$Props['size'] = 'md';
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-input-group';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(PREFIX, { alignment: Alignment, size: Size }, { alignment, size }),
        generateResponsiveClasses<$$ResponsiveProps>(PREFIX, { alignment: Alignment, size: Size }, screen, {
            alignment: true,
            size: true,
        }),
        [restClass],
    );
</script>

<div class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'InputGroup.scss';
</style>
