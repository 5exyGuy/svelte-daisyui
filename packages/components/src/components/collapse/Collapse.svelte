<script>
    import { classes } from '../../utilities';
    import { CollapseIcon } from './collapse-icon.enum';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {'arrow' | 'plus'}
     */
    export let icon;

    /**
     * @type {boolean}
     */
    export let open = false;

    /**
     * @type {boolean}
     */
    export let close = false;

    let className;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'collapse',
        {
            icon: {
                condition: !!icon,
                key: icon,
                value: CollapseIcon,
            },
            open: {
                condition: open,
                value: 'open',
            },
            close: {
                condition: close,
                value: 'close',
            },
        },
        className,
    );
</script>

<div tabindex="0" class={classNames}>
    <div class="collapse-title">
        <slot name="title" />
    </div>
    <div class="collapse-content">
        <slot />
    </div>
</div>

<style lang="scss">
    @import 'CollapseStyled.scss';
    @import 'CollapseUnstyled.scss';
</style>
