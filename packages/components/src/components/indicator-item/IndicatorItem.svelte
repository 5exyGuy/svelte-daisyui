<script>
    import { HorizontalAlignment, VerticalAlignment } from '../../enums';
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {'start' | 'center' | 'end'}
     */
    export let horizontal = 'end';

    /**
     * @type {'top' | 'middle' | 'bottom'}
     */
    export let vertical = 'top';

    let className = undefined;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'indicator-item',
        {
            horizontal: {
                condition: !!horizontal,
                key: horizontal,
                value: HorizontalAlignment,
            },
            vertical: {
                condition: !!vertical,
                key: vertical,
                value: VerticalAlignment,
            },
        },
        className,
    );
</script>

<span class={classNames}>
    <slot />
</span>

<style lang="scss">
    @import 'IndicatorItemStyled.scss';
    @import 'IndicatorItemUnstyled.scss';
</style>
