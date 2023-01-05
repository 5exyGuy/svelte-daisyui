<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import { Alignment, HorizontalAlignment } from '../../enums';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        snap?: StringKeyOf<typeof HorizontalAlignment>;
        alignment?: StringKeyOf<typeof Alignment>;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'snap' | 'alignment'> {}
    interface $$ClassProps extends Pick<$$Props, 'snap' | 'alignment'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let snap: $$Props['snap'] = 'start';
    export let alignment: $$Props['alignment'] = 'horizontal';
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-carousel-group';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(
            PREFIX,
            { alignment: Alignment, snap: HorizontalAlignment },
            { alignment, snap },
        ),
        generateResponsiveClasses<$$ResponsiveProps>(
            PREFIX,
            { alignment: Alignment, snap: HorizontalAlignment },
            screen,
            { alignment: true, snap: true },
        ),
        [restClass],
    );
</script>

<div class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'CarouselGroup.scss';
</style>
