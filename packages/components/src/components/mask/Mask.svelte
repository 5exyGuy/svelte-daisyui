<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';
    import { MaskHalfType } from './mask-half-type.enum';
    import { MaskType } from './mask-type.enum';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        half?: StringKeyOf<typeof MaskHalfType>;
        type?: StringKeyOf<typeof MaskType>;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'half' | 'type'> {}
    interface $$ClassProps extends Pick<$$Props, 'half' | 'type'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let half: $$Props['half'] = undefined;
    export let type: $$Props['type'] = 'circle';
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-mask';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(PREFIX, { half: MaskHalfType, type: MaskType }, { half, type }),
        generateResponsiveClasses<$$ResponsiveProps>(PREFIX, { half: MaskHalfType, type: MaskType }, screen, {
            half: true,
            type: true,
        }),
        [restClass],
    );
</script>

<div class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'Mask.scss';
</style>
