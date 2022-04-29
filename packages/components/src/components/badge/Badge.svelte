<script>
    import { classes } from '../../utils';
    import {
        BrandColor,
        FunctionalColor,
        AdditionalColor,
        Size,
    } from '../../enums';

    // -----------------------------------------------------------
    //                     Type Definitions
    // -----------------------------------------------------------

    /**
     * @typedef {'primary' | 'secondary' | 'accent' | 'info'} BrandColor
     * @typedef {'info' | 'success' | 'warning' | 'error'} FunctionalColor
     * @typedef {'tiny' | 'small' | 'medium' | 'large'} Size
     */

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     * @type {BrandColor | FunctionalColor}
     */
    export let color;

    /**
     * @type {Size}
     */
    export let size = 'medium';

    /**
     * @type {boolean}
     */
    export let outline = false;

    let className;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'badge',
        {
            color: {
                condition: !!color,
                key: color,
                value: {
                    ...BrandColor,
                    ...FunctionalColor,
                    ...AdditionalColor,
                },
            },
            size: {
                condition: !!size,
                key: size,
                value: Size,
            },
            outline: {
                condition: outline,
                value: 'outline',
            },
        },
        className,
    );
</script>

<div class={classNames}>
    <slot />
</div>

<style lang="scss">
    @import 'BadgeStyled.scss';
    @import 'BadgeUnstyled.scss';
</style>
