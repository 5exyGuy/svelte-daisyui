<script>
    import { Size } from '../../enums';
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    //                           Props
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
     * @type {'tiny' | 'small' | 'medium' | 'large'}
     */
    export let size = 'medium';

    let className;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
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
