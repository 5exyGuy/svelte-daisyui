<script>
    import { BrandColor, FunctionalColor, Size } from '../../enums';
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {'xs' | 'sm' | 'md' | 'lg'}
     */
    export let size = 'md';

    /**
     * @type {'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'}
     */
    export let color = undefined;

    /**
     * @type {string}
     */
    export let name = undefined;

    /**
     * @type {boolean}
     */
    export let checked = false;

    let className = undefined;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    // Classes and Styles
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
