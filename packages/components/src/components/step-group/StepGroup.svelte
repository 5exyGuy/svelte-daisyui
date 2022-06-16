<script>
    import { Alignment } from '../../enums';
    import { classes } from '../../utilities';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {'horizontal' | 'vertical'}
     */
    export let alignment = 'horizontal';

    let className = undefined;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'step-group',
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
    @import 'StepGroupStyled.scss';
    @import 'StepGroupUnstyled.scss';
</style>
