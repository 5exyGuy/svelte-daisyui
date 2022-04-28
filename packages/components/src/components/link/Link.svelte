<script>
    import { BrandColor, FunctionalColor } from '../../enums';
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     * @type {'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'neutral' | undefined}
     */
    export let color;

    /**
     * @type {boolean}
     */
    export let hover = false;

    /**
     * @type {string | undefined}
     */
    export let href = '#';

    let className = '';
    /**
     * @type {string | undefined}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    const classNames = classes(
        'link',
        {
            color: {
                condition: !!color,
                key: color,
                value: { ...BrandColor, ...FunctionalColor },
            },
            hover: {
                condition: hover,
                value: 'hover',
            },
        },
        className,
    );
</script>

<a {href} class={classNames}>
    <slot />
</a>

<style lang="scss">
    @import 'LinkStyled.scss';
    @import 'LinkUnstyled.scss';
</style>
