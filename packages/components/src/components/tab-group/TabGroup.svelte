<script>
    import { Size } from '../../enums';
    import { classes } from '../../utils';
    import { TabGroupType } from './tab-group-type.enum';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     * @type {'bordered' | 'lifted' | 'boxed' | undefined}
     */
    export let type;

    /**
     * @type {'tiny' | 'small' | 'medium' | 'large'}
     */
    export let size = 'medium';

    let className;
    /**
     * @type {string | undefined}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
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
