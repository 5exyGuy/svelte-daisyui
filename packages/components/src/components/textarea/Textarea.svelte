<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import { BrandColor, FunctionalColor } from '../../enums';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLTextAreaElement> {
        color?: StringKeyOf<typeof BrandColor & typeof FunctionalColor> | 'ghost';
        bordered?: boolean;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'color' | 'bordered'> {}
    interface $$ClassProps extends Pick<$$Props, 'color' | 'bordered'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let color: $$Props['color'] = undefined;
    export let bordered: $$Props['bordered'] = false;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-textarea';
    const COLORS = { ...BrandColor, ...FunctionalColor, ...{ ghost: 'ghost' } };

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(PREFIX, { bordered: 'bordered', color: COLORS }, { bordered, color }),
        generateResponsiveClasses<$$ResponsiveProps>(PREFIX, { bordered: 'bordered', color: COLORS }, screen, {
            bordered: true,
            color: true,
        }),
        [restClass],
    );
</script>

<textarea class={classNames} {...$$restProps} />

<style lang="scss" global>
    @import 'TextArea.scss';
</style>
