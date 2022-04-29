<script>
    import { BrandColor, FunctionalColor, Size } from '../../enums';
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     * @type {'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'}
     */
    export let color;

    /**
     * @type {'tiny' | 'small' | 'medium' | 'large'}
     */
    export let size = 'medium';

    /**
     * @type {boolean}
     */
    export let disabled = false;

    /**
     * @type {boolean}
     */
    export let checked = false;

    let className;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'toggle',
        {
            color: {
                condition: !!color,
                key: color,
                value: { ...BrandColor, ...FunctionalColor },
            },
            size: {
                condition: !!size,
                key: size,
                value: Size,
            },
        },
        className,
    );
</script>

<input type="checkbox" {disabled} {checked} class={classNames} />

<style lang="scss">
    @import 'ToggleStyled.scss';
    @import 'ToggleUnstyled.scss';
</style>
