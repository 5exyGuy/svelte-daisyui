<script>
    import { Alignment, Size } from '../../enums';
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {'horizontal' | 'vertical'}
     */
    export let alignment = 'horizontal';

    /**
     * @type {'xs' | 'sm' | 'md' | 'lg'}
     */
    export let size = 'md';

    let className;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'input-group',
        {
            alignment: {
                condition: !!alignment,
                key: alignment,
                value: Alignment,
            },
            size: {
                condition: !!size,
                key: size,
                value: Size,
            },
        },
        className,
    );
</script>

<div class={classNames}>
    <slot />
</div>

<style lang="scss">
    @import 'InputGroupStyled.scss';
    @import 'InputGroupUnstyled.scss';
</style>
