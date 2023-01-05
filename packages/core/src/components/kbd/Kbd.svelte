<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import { Size } from '../../enums';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends Omit<svelte.JSX.HTMLAttributes<HTMLElement>, 'size'> {
        size?: StringKeyOf<typeof Size>;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'size'> {}
    interface $$ClassProps extends Pick<$$Props, 'size'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let size: $$Props['size'] = undefined;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-kbd';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(PREFIX, { size: Size }, { size }),
        generateResponsiveClasses<$$ResponsiveProps>(PREFIX, { size: Size }, screen, { size: true }),
        [restClass],
    );
</script>

<kbd class={classNames} {...$$restProps}>
    <slot />
</kbd>

<style lang="scss" global>
    @import 'Kbd.scss';
</style>
