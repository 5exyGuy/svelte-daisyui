<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import { Alignment } from '../../enums';
    import type { ClassesParams } from '../../interfaces';
    import { classes } from '../../utils';
    import type { ArtboardClassProps } from './artboard-props.interface';
    import { ArtboardSize } from './artboard-size.enum';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * Fixed size of container.
     */
    export let size: StringKeyOf<typeof ArtboardSize>;

    /**
     * Adds shadow and glow. Elements are placed in the center.
     */
    export let demo: boolean = false;

    /**
     * Horizontal and vertical alignment of the container.
     */
    export let alignment: StringKeyOf<typeof Alignment> = 'horizontal';

    let restClass;
    /**
     * A space-separated list of the classes of the element.
     */
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes<ArtboardClassProps>({
        prefix: 'dui-artboard',
        propData: { size: ArtboardSize, demo: 'demo', alignment: Alignment },
        propValues: { size, demo, alignment },
        restClass,
    } as ClassesParams<ArtboardClassProps>);
</script>

<div class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'Artboard.scss';
</style>
