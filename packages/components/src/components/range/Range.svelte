<script>
    import { Size } from '../../enums';
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {number}
     */
    export let min = 0;

    /**
     * @type {number}
     */
    export let max = 100;

    /**
     * @type {number}
     */
    export let value = 0;

    /**
     * @type {number}
     */
    export let step = 1;

    /**
     * @type {'xs' | 'sm' | 'md' | 'lg'}
     */
    export let size = 'md';

    let className = undefined;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'range',
        {
            size: {
                condition: !!size,
                key: size,
                value: Size,
            },
        },
        className,
    );
</script>

<input class={classNames} type="range" {min} {max} {step} {value} />

<style lang="scss">
    @import 'RangeStyled.scss';
    @import 'RangeUnstyled.scss';
</style>
