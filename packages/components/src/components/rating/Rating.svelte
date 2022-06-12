<script>
    import { Size } from '../../enums';
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {'xs' | 'sm' | 'md' | 'lg'}
     */
    export let size = 'md';

    /**
     * @type {boolean}
     */
    export let half = false;

    let className = undefined;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'rating',
        {
            size: {
                condition: !!size,
                key: size,
                value: Size,
            },
            half: {
                condition: half,
                value: 'half',
            },
        },
        className,
    );
</script>

<div class={classNames}>
    <slot />
</div>

<style lang="scss">
    @import 'RatingStyled.scss';
    @import 'RatingUnstyled.scss';
</style>
