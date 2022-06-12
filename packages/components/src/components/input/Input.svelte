<script>
    import { classes } from '../../utils';
    import { BrandColor, FunctionalColor, Size } from '../../enums';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {string}
     */
    export let placeholder = undefined;

    /**
     * @type {'xs' | 'sm' | 'md' | 'lg'}
     */
    export let size = 'md';

    /**
     * @type {'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'ghost'}
     */
    export let color = undefined;

    /**
     * @type {boolean}
     */
    export let disabled = false;

    /**
     * @type {boolean}
     */
    export let bordered = false;

    let className = undefined;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'input',
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
            bordered: {
                condition: bordered,
                value: 'bordered',
            },
        },
        className,
    );
</script>

<input class={classNames} type="text" {placeholder} {disabled} />

<style lang="scss">
    @import 'InputStyled.scss';
    @import 'InputUnstyled.scss';
</style>
