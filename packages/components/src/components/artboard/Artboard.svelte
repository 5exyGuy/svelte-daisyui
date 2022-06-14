<script lang="ts">
    import { classes, ArtboardSize, Alignment } from '@svelte-daisyui/shared';
    import type { StringKeyOf } from 'type-fest';

    // -----------------------------------------------------------
    //  Type Definitions
    // -----------------------------------------------------------

    interface Properties {
        size: StringKeyOf<typeof ArtboardSize>;
        demo: boolean;
        alignment: StringKeyOf<typeof Alignment>;
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * Fixed size of container.
     */
    export let size: Properties['size'] = undefined;

    /**
     * Adds shadow and glow. Elements are placed in the centre.
     */
    export let demo: Properties['demo'] = false;

    /**
     * Horizontal and vertical alignment of the container.
     */
    export let alignment: Properties['alignment'] = 'horizontal';

    let restClass = undefined;
    /**
     * A space-separated list of the classes of the element.
     * Classes allows CSS and JavaScript to select and access
     * specific elements via the class selectors or functions
     * like the method Document.getElementsByClassName().
     */
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes<Properties>({
        prefix: 'dui-artboard',
        propData: { size: ArtboardSize, demo: 'demo', alignment: Alignment },
        propValues: { size, demo, alignment },
        restClass,
    });
</script>

<div class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'Artboard.scss';
</style>
