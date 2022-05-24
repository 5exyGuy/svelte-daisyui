<script>
    import { classes } from '../../utils';
    import { SwapAnim } from './swap-anim.enum';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {'rotate' | 'flip'}
     */
    export let animation;

    /**
     * @type {boolean}
     */
    export let state = false;

    let className;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
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

    // -----------------------------------------------------------
    //                       Functionality
    // -----------------------------------------------------------

    const changeState = () => (state = !state);
</script>

<div class={classNames} on:click={changeState} on:click data-state={state}>
    <slot name="on" />
    <slot name="off" />
</div>

<style lang="scss">
    @import 'SwapStyled.scss';
    @import 'SwapUnstyled.scss';
</style>
