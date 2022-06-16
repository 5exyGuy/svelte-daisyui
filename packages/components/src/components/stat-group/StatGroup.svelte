<script>
    import { Alignment, BrandColor, FunctionalColor } from '../../enums';
    import { classes } from '../../utilities';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {'horizontal' | 'vertical'}
     */
    export let alignment = 'horizontal';
    /**
     * @type {'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'}
     */
    export let background;

    let className = undefined;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'stat-group',
        {
            alignment: {
                condition: !!alignment,
                key: alignment,
                value: Alignment,
            },
            background: {
                condition: !!background,
                key: background,
                value: { ...BrandColor, ...FunctionalColor },
            },
        },
        className,
    );
</script>

<div class={classNames}>
    <slot />
</div>

<style lang="scss">
    @import 'StatGroupStyled.scss';
    @import 'StatGroupUnstyled.scss';
</style>
