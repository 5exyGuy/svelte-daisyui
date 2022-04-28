<script>
    import { classes } from '../../utils';
    import { MaskHalfType } from './mask-half-type.enum';
    import { MaskType } from './mask-type.enum';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     * @type {'1' | '2' | 1 | 2 | undefined}
     */
    export let half;

    /**
     * @type {'squircle' | 'heart' | 'hexagon' | 'hexagon2' | 'decagon' | 'pentagon' | 'diamond' | 'square' | 'circle' | 'parallelogram' | 'parallelogram2' | 'parallelogram3' | 'parallelogram4' | 'star' | 'star2' | 'triangle' | 'triangle2' | 'triangle3' | 'triangle4'}
     */
    export let type = 'circle';

    let className;
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    const classNames = classes(
        'mask',
        {
            half: {
                condition: !!half,
                key: half,
                value: MaskHalfType,
            },
            type: {
                condition: !!type,
                key: type,
                value: MaskType,
            },
        },
        className,
    );
</script>

<div class={classNames}>
    <slot />
</div>

<style lang="scss">
    @import 'MaskStyled.scss';
    @import 'MaskUnstyled.scss';
</style>
