<script>
    import { BrandColor, FunctionalColor } from '../../enums';
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     * @type {'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'neutral'}
     */
    export let color;

    /**
     * @type {boolean}
     */
    export let hover = false;

    /**
     * @type {string}
     */
    export let href = '#';

    let className;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
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
