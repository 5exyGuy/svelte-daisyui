<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import { HorizontalAlignment, VerticalAlignment } from '../../enums';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLSpanElement> {
        horizontal?: StringKeyOf<typeof HorizontalAlignment>;
        vertical?: StringKeyOf<typeof VerticalAlignment>;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'horizontal' | 'vertical'> {}
    interface $$ClassProps extends Pick<$$Props, 'horizontal' | 'vertical'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let horizontal: $$Props['horizontal'] = 'end';
    export let vertical: $$Props['vertical'] = 'top';
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-indicator-item';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(
            PREFIX,
            {
                horizontal: HorizontalAlignment,
                vertical: VerticalAlignment,
            },
            { horizontal, vertical },
        ),
        generateResponsiveClasses<$$ResponsiveProps>(
            PREFIX,
            {
                horizontal: HorizontalAlignment,
                vertical: VerticalAlignment,
            },
            screen,
            { horizontal: true, vertical: true },
        ),
        [restClass],
    );
</script>

<span class={classNames} {...$$restProps}>
    <slot />
</span>

<style lang="scss" global>
    @import 'IndicatorItem.scss';
</style>
