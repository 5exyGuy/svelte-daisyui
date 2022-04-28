<script>
    import { classes } from '../../utils';
    import { BrandColor, FunctionalColor } from '../../enums';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     * @type {string | undefined}
     */
    export let placeholder;

    /**
     * @type {'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'ghost' | undefined}
     */
    export let color;

    /**
     * @type {boolean}
     */
    export let disabled = false;

    /**
     * @type {boolean}
     */
    export let bordered = false;

    let className;
    /**
     * @type {string | undefined}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    const classNames = classes(
        'textarea',
        {
            color: {
                condition: !!color,
                key: color,
                value: { ...BrandColor, ...FunctionalColor },
            },
            bordered: {
                condition: bordered,
                value: 'bordered',
            },
        },
        className,
    );
</script>

<textarea class={classNames} {placeholder} {disabled} />

<style lang="scss">
    @import 'TextareaStyled.scss';
    @import 'TextareaUnstyled.scss';
</style>
