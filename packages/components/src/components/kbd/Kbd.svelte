<script>
    import { Size } from '../../enums';
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     * @type {'tiny' | 'small' | 'medium' | 'large'}
     */
    export let size;

    let className = '';
    /**
     * @type {string | undefined}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    const classNames = classes(
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
