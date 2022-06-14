<script>
    import { classes, ArtboardSize, Alignment } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    //  Type Definitions
    // -----------------------------------------------------------

    /**
     * @restProps {div}
     * @typedef {1 | 2 | 3 | 4 | 5 | 6} Size
     * @typedef {'horizontal' | 'vertical'} Alignment
     */

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {Size}
     */
    export let size = undefined;

    /**
     * @type {boolean}
     */
    export let demo = false;

    /**
     * @type {Alignment}
     */
    export let alignment = 'horizontal';

    let restClass = undefined;
    /**
     * @type {string}
     */
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes({
        prefix: 'dui-artboard',
        classProps: {
            size: { value: ArtboardSize },
            demo: { value: 'demo' },
            alignment: { value: Alignment },
        },
        props: { size, demo, alignment },
        restClass,
    });
</script>

<div class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'Artboard.scss';
</style>
