<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import { BrandColor, FunctionalColor, Size } from '../../enums';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends Omit<svelte.JSX.HTMLAttributes<HTMLInputElement>, 'size'> {
        color?: StringKeyOf<typeof BrandColor & typeof FunctionalColor>;
        size?: StringKeyOf<typeof Size>;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'color' | 'size'> {}
    interface $$ClassProps extends Pick<$$Props, 'color' | 'size'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let color: $$Props['color'] = undefined;
    export let size: $$Props['size'] = 'md';
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-radio';
    const COLORS = { ...BrandColor, ...FunctionalColor };

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(PREFIX, { color: COLORS, size: Size }, { color, size }),
        generateResponsiveClasses<$$ResponsiveProps>(PREFIX, { color: COLORS, size: Size }, screen, {
            color: true,
            size: true,
        }),
        [restClass],
    );
</script>

<input type="radio" class={classNames} {...$$restProps} />

<style lang="scss" global>
    @import 'Radio.scss';
</style>
