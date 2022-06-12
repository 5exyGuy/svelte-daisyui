<script>
    import { BrandColor, FunctionalColor, Size } from '../../enums';
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'ghost'}
     */
    export let color = undefined;

    /**
     * @type {'xs' | 'sm' | 'md' | 'lg'}
     */
    export let size = 'md';

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
        'select',
        {
            color: {
                condition: !!color,
                key: color,
                value: {
                    ...BrandColor,
                    ...FunctionalColor,
                    ...{ ghost: 'ghost' },
                },
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

<select class={classNames}>
    <slot />
</select>

<style lang="scss">
    @import 'SelectStyled.scss';
    @import 'SelectUnstyled.scss';
</style>
