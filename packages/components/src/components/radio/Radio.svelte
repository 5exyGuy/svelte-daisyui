<script>
    import { BrandColor, FunctionalColor, Size } from '../../enums';
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     * @type {'tiny' | 'small' | 'medium' | 'large'}
     */
    export let size = 'medium';

    /**
     * @type {'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | undefined}
     */
    export let color;

    /**
     * @type {string | undefined}
     */
    export let name;

    /**
     * @type {boolean}
     */
    export let checked = false;

    let className;
    /**
     * @type {string | undefined}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'radio',
        {
            size: {
                condition: !!size,
                key: size,
                value: Size,
            },
            color: {
                condition: !!color,
                key: color,
                value: { ...BrandColor, ...FunctionalColor },
            },
        },
        className,
    );
</script>

<input type="radio" on:change class={classNames} {name} {checked} />

<style lang="scss">
    @import 'RadioStyled.scss';
    @import 'RadioUnstyled.scss';
</style>
