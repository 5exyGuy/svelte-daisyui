<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import { BrandColor, FunctionalColor, Size } from '../../enums';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends Omit<svelte.JSX.HTMLAttributes<HTMLSelectElement>, 'size'> {
        color?: StringKeyOf<typeof BrandColor & typeof FunctionalColor>;
        size?: StringKeyOf<typeof Size>;
        bordered?: boolean;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'color' | 'size' | 'bordered'> {}
    interface $$ClassProps extends Pick<$$Props, 'color' | 'size' | 'bordered'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let color: $$Props['color'] = undefined;
    export let size: $$Props['size'] = 'md';
    export let bordered: $$Props['bordered'] = false;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-select';
    const COLORS = { ...BrandColor, ...FunctionalColor };

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(
            PREFIX,
            { color: COLORS, size: Size, bordered: 'bordered' },
            { color, size, bordered },
        ),
        generateResponsiveClasses<$$ResponsiveProps>(
            PREFIX,
            { color: COLORS, size: Size, bordered: 'bordered' },
            screen,
            {
                color: true,
                size: true,
                bordered: true,
            },
        ),
        [restClass],
    );
</script>

<select class={classNames} {...$$restProps}>
    <slot />
</select>

<style lang="scss" global>
    @import 'Select.scss';
</style>
