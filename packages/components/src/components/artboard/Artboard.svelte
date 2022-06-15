<script lang="ts">
    import { Alignment } from '../../enums';
    import type { ClassesParams } from '../../interfaces';
    import { classes } from '../../utils/classes';
    import type { ArtboardClassProps, ArtboardProps } from './artboard-props.interface';
    import { ArtboardSize } from './artboard-size.enum';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * Fixed size of container.
     */
    export let size: ArtboardProps['size'] = undefined;

    /**
     * Horizontal and vertical alignment of the container.
     */
    export let alignment: ArtboardProps['alignment'] = 'horizontal';

    /**
     * Adds shadow and glow. Elements are placed in the center.
     */
    export let demo: ArtboardProps['demo'] = false;

    let restClass: ArtboardProps['class'] = undefined;
    /**
     * A space-separated list of the classes of the element.
     */
    export { restClass as class };

    // -----------------------------------------------------------
    // Screen
    // -----------------------------------------------------------

    /**
     * Responsive properties for the component.
     */
    export let screen: ArtboardProps['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes<ArtboardClassProps>({
        prefix: 'dui-artboard',
        propData: { size: ArtboardSize, alignment: Alignment, demo: 'demo' },
        propValues: { size, alignment, demo },
        screen,
        restClass,
    } as ClassesParams<ArtboardClassProps>);
</script>

<div class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'Artboard.scss';
</style>
