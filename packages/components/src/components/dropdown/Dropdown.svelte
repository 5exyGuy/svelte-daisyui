<script>
    import { Position } from '../../enums';
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     * @type {'top' | 'bottom' | 'left' | 'right'}
     */
    export let position = 'bottom';

    /**
     * @type {boolean}
     */
    export let end = false;

    let className;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'dropdown',
        {
            position: {
                condition: !!position,
                key: position,
                value: Position,
            },
            end: {
                condition: end,
                value: 'end',
            },
        },
        className,
    );
</script>

<div class={classNames}>
    <slot name="focus" tabindex="0" />
    <div class="dropdown-content">
        <slot />
    </div>
</div>

<style lang="scss">
    @import 'DropdownStyled.scss';
    @import 'DropdownUnstyled.scss';
</style>
