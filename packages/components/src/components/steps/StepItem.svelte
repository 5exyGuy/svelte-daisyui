<script>
    import { BrandColor, FunctionalColor } from '../../enums';
    import { classes } from '../../utilities';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'neutral'}
     */
    export let color;

    let className = undefined;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'step-item',
        {
            color: {
                condition: !!color,
                key: color,
                value: { ...BrandColor, ...FunctionalColor },
            },
        },
        className,
    );
</script>

<div class={classNames}>
    <slot />
</div>

<style lang="scss" global>
    @import 'StepItem.scss';
</style>
