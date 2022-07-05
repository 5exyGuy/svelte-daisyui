<script lang="ts">
    // import type { CSSUnit } from '@svelte-daisyui/shared';
    import type { StringKeyOf } from 'type-fest';
    import { Alignment } from '../../enums';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';
    import { ArtboardSize } from './artboard-size.enum';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends Omit<svelte.JSX.HTMLAttributes<HTMLDivElement>, 'size'> {
        size?: StringKeyOf<typeof ArtboardSize>;
        alignment?: StringKeyOf<typeof Alignment>;
        demo?: boolean;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'size' | 'alignment'> {}
    interface $$ClassProps extends Pick<$$Props, 'size' | 'alignment' | 'demo'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let size: $$Props['size'] = '320x568';
    // export let width: CSSUnit = undefined;
    // export let height: CSSUnit = undefined;
    export let alignment: $$Props['alignment'] = 'horizontal';
    export let demo: $$Props['demo'] = false;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-artboard';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(
            PREFIX,
            {
                alignment: Alignment,
                demo: 'demo',
                size: ArtboardSize,
            },
            { alignment, demo, size },
        ),
        generateResponsiveClasses<$$ResponsiveProps>(PREFIX, { alignment: Alignment, size: ArtboardSize }, screen, {
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
    @import 'Artboard.scss';
</style>
