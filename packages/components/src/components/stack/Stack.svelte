<script>
    import { classes } from '../../utils';
    import { StackDirection } from './stack-direction.enum';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     *  @type {'up' | 'down' | 'left' | 'right' | 'upleft' | 'upright' | 'downleft' | 'downright'}
     */
    export let direction = 'down';

    let className;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'stack',
        {
            direction: {
                condition: !!direction,
                key: direction,
                value: StackDirection,
            },
        },
        className,
    );
</script>

<div class={classNames}>
    <slot />
</div>

<style lang="scss">
    @import 'StackStyled.scss';
    @import 'StackUnstyled.scss';
</style>
