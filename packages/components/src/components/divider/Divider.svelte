<script>
    import { Alignment } from '../../enums';
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     * @type {'vertical' | 'horizontal'}
     */
    export let alignment = 'vertical';

    let className;
    /**
     * @type {string | undefined}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'divider',
        {
            alignment: {
                condition: !!alignment,
                key: alignment,
                value: Alignment,
            },
        },
        className,
    );
</script>

<div class={classNames}>
    <slot />
</div>

<style lang="scss">
    @import 'DividerStyled.scss';
    @import 'DividerUnstyled.scss';
</style>
