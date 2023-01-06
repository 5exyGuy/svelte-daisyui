<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import { BrandColor, FunctionalColor } from '../../enums';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLElement> {
        color?: StringKeyOf<typeof BrandColor & typeof FunctionalColor> | 'neutral';
        hover?: boolean;
        href?: string;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'color' | 'hover'> {}
    interface $$ClassProps extends Pick<$$Props, 'color' | 'hover'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let color = undefined;
    export let hover = false;
    export let href = '#';
    let restClass = undefined;
    export { restClass as class };
    export let screen = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-link';
    const COLORS = { ...BrandColor, ...FunctionalColor, ...{ neutral: 'neutral' } };

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(PREFIX, { color: COLORS, hover: 'hover' }, { color, hover }),
        generateResponsiveClasses<$$ResponsiveProps>(PREFIX, { color: COLORS, hover: 'hover' }, screen, {
            color: true,
            hover: true,
        }),
        [restClass],
    );
</script>

<a {href} class={classNames} {...$$restProps}>
    <slot />
</a>

<style lang="scss" global>
    @import 'Link.scss';
</style>
