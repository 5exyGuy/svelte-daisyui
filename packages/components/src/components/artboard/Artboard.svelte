<script>
    import { classes } from '../../utils';
    import { ArtboardSize } from './artboard-size.enum';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     * @type {'1' | '2' | '3' | '4' | '5' | '6' | 1 | 2 | 3 | 4 | 5 | 6}
     */
    export let size = '1';

    /**
     * @type {boolean}
     */
    export let demo = false;

    /**
     * @type {boolean}
     */
    export let horizontal = false;

    let className;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'artboard',
        {
            size: {
                condition: !!size,
                key: `phone${size}`,
                value: ArtboardSize,
            },
            demo: {
                condition: demo,
                value: 'demo',
            },
            horizontal: {
                condition: horizontal,
                value: 'horizontal',
            },
        },
        className,
    );
</script>

<div class={classNames}>
    <slot />
</div>

<style lang="scss">
    @import 'ArtboardStyled.scss';
    @import 'ArtboardUnstyled.scss';
</style>
