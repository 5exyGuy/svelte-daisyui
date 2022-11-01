<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import { BrandColor, FunctionalColor } from '../../enums';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        color?: StringKeyOf<typeof BrandColor & typeof FunctionalColor> | 'neutral';
        content?: string;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'color'> {}
    interface $$ClassProps extends Pick<$$Props, 'color'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let color: $$Props['color'] = undefined;
    export let content: $$Props['content'] = undefined;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-steps-item';
    const COLORS = { ...BrandColor, ...FunctionalColor, ...{ neutral: 'neutral' } };

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(PREFIX, { color: COLORS }, { color }),
        generateResponsiveClasses<$$ResponsiveProps>(PREFIX, { color: COLORS }, screen, {
            color: true,
        }),
        [restClass],
    );
</script>

<div data-content={content} class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'StepsItem.scss';
</style>
