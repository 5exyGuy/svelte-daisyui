<script>
    import { Alignment, HorizontalAlignment } from '../../enums';
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     * @type {'start' | 'center' | 'end'}
     */
    export let snap = 'start';

    /**
     * @type {'horizontal' | 'vertical'}
     */
    export let alignment = 'horizontal';

    let className;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'carousel-group',
        {
            snap: {
                condition: !!snap,
                key: snap,
                value: HorizontalAlignment,
            },
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
    @import 'CarouselGroupStyled.scss';
    @import 'CarouselGroupUnstyled.scss';
</style>
