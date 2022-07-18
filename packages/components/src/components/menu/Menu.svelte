<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import { Alignment } from '../../enums';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLUListElement> {
        alignment?: StringKeyOf<typeof Alignment>;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'alignment'> {}
    interface $$ClassProps extends Pick<$$Props, 'alignment'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let alignment: $$Props['alignment'] = 'horizontal';
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-menu';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(PREFIX, { alignment: Alignment }, { alignment }),
        generateResponsiveClasses<$$ResponsiveProps>(PREFIX, { alignment: Alignment }, screen, { alignment: true }),
        [restClass],
    );
</script>

<ul class={classNames} {...$$restProps}>
    <slot />
</ul>

<style lang="scss" global>
    @import 'Menu.scss';
</style>
