<script lang="ts">
    import { Alignment } from '../../enums';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';
    import type { ArtboardClassProps, ArtboardProps, ArtboardResponsiveProps } from './artboard-props.interface';
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

    /**
     * A space-separated list of the classes of the element.
     */
    let restClass: ArtboardProps['class'] = undefined;
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

    const PREFIX = 'dui-artboard';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<ArtboardClassProps>(
            PREFIX,
            {
                alignment: Alignment,
                demo: 'demo',
                size: ArtboardSize,
            },
            { alignment, demo, size },
        ),
        generateResponsiveClasses<ArtboardResponsiveProps>(
            PREFIX,
            { alignment: Alignment, size: ArtboardSize },
            screen,
            { alignment: true, size: true },
        ),
        [restClass],
    );
</script>

<div class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'Artboard.scss';
</style>
