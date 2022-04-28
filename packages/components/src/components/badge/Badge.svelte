<script>
    import { classes } from '../../utils';
    import {
        BrandColor,
        FunctionalColor,
        AdditionalColor,
        Size,
    } from '../../enums';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     * @type {'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | undefined}
     */
    export let color;

    /**
     * @type {'tiny' | 'small' | 'medium' | 'large'}
     */
    export let size = 'medium';

    /**
     * @type {boolean}
     */
    export let outline = false;

    let className = '';
    /**
     * @type {string | undefined}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    const classNames = classes(
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
