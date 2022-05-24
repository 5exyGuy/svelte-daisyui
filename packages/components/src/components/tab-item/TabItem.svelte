<script>
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {boolean}
     */
    export let active = false;

    let className;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'tab-item',
        {
            active: {
                condition: active,
                value: 'active',
            },
        },
        className,
    );
</script>

<div tabindex="0" class={classNames}>
    <slot />
</div>

<style lang="scss">
    @import 'TabItemStyled.scss';
    @import 'TabItemUnstyled.scss';
</style>
