<script>
    import { Size } from '../../enums';
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {'tiny' | 'small' | 'medium' | 'large'}
     */
    export let size;

    let className;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'kbd',
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

<kbd class={classNames}>
    <slot />
</kbd>

<style lang="scss">
    @import 'KbdStyled.scss';
    @import 'KbdUnstyled.scss';
</style>
