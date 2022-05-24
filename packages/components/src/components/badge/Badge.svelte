<script>
    import {
        classes,
        BrandColor,
        FunctionalColor,
        Size,
    } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    /**
     * @typedef {'primary' | 'secondary' | 'accent' | 'info'} BrandColor
     * @typedef {'info' | 'success' | 'warning' | 'error'} FunctionalColor
     * @typedef {'tiny' | 'small' | 'medium' | 'large'} Size
     * @typedef {{ color?: BrandColor | FunctionalColor | 'ghost', size?: Size }} Props
     * @typedef {{ sm?: Props, md?: Props, lg?: Props, xl?: Props, '2xl'?: Props }} Screen
     */

    // -----------------------------------------------------------
    // Props
    // -----------------------------------------------------------

    /**
     * @type {Props['color']}
     */
    export let color = undefined;

    /**
     * @type {Props['size']}
     */
    export let size = 'medium';

    /**
     * @type {boolean}
     */
    export let outline = false;

    let restClass = undefined;
    /**
     * @type {string}
     */
    export { restClass as class };

    // -----------------------------------------------------------
    // Screen
    // -----------------------------------------------------------

    /**
     * @type {Screen}
     */
    export let screen = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'badge',
        {
            color: {
                value: {
                    ...BrandColor,
                    ...FunctionalColor,
                },
            },
            size: {
                value: Size,
            },
            outline: {
                value: 'outline',
            },
        },
        restClass,
        { color, size, outline },
        screen,
    );
</script>

<div class={classNames}>
    <slot />
</div>

<style lang="scss">
    @import 'BadgeStyled.scss';
    @import 'BadgeUnstyled.scss';
</style>
