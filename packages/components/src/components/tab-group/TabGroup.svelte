<script>
    import { Size } from '../../enums';
    import { classes } from '../../utilities';
    import { TabGroupType } from './tab-group-type.enum';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {'bordered' | 'lifted' | 'boxed'}
     */
    export let type = undefined;

    /**
     * @type {'xs' | 'sm' | 'md' | 'lg'}
     */
    export let size = 'md';

    let className = undefined;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'tab-group',
        {
            type: {
                condition: !!type,
                key: type,
                value: TabGroupType,
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
    @import 'TabGroupStyled.scss';
    @import 'TabGroupUnstyled.scss';
</style>
