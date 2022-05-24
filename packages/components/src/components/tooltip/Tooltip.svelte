<script>
    import { BrandColor, FunctionalColor, Position } from '../../enums';
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {boolean}
     */
    export let open = false;

    /**
     * @type {'top' | 'bottom' | 'left' | 'right'}
     */
    export let position = 'top';

    /**
     * @type {'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'}
     */
    export let color;

    let className;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'tooltip',
        {
            open: {
                condition: open,
                value: 'open',
            },
            position: {
                condition: !!position,
                key: position,
                value: Position,
            },
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
    <div class="tooltip-content">
        <slot name="content" />
    </div>
    <slot />
</div>

<style lang="scss">
    @import 'TooltipStyled.scss';
    @import 'TooltipUnstyled.scss';
</style>
