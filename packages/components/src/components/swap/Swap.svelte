<script>
    import { classes } from '../../utils';
    import { SwapAnim } from './swap-anim.enum';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     * @type {'rotate' | 'flip'}
     */
    export let animation = null;

    /**
     * @type {boolean}
     */
    export let state = false;

    let className;
    /**
     * @type {string | undefined}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    const classNames = classes(
        'swap',
        {
            animation: {
                condition: !!animation,
                key: animation,
                value: SwapAnim,
            },
        },
        className,
    );
</script>

<div class={classNames} on:click data-state={state}>
    <slot name="swap-on" />
    <slot name="swap-off" />
</div>

<style lang="scss">
    @import 'SwapStyled.scss';
    @import 'SwapUnstyled.scss';
</style>
