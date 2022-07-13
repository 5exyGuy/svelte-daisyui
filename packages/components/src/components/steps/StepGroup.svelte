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

<div class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'StepGroup.scss';
</style>
