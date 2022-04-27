<script>
    import { BrandColor, FunctionalColor, Size, AdditionalColor } from '../../enums';
    import { ButtonShape } from './button-shape.enum';
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    //                      Type definitions
    // -----------------------------------------------------------

    /**
     * @typedef {'primary' | 'secondary' | 'accent'} BrandColor
     * @typedef {'info' | 'success' | 'warning' | 'error'} FunctionalColor
     * @typedef {'ghost' | 'link'} AdditionalColor
     * @typedef {'tiny' | 'small' | 'medium' | 'large'} Size
     * @typedef {'square' | 'circle'} Shape
     */

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     * @type {BrandColor | FunctionalColor | AdditionalColor | undefined}
     */
    export let color = null;
    /**
     * @type {Size | undefined}
     */
    export let size = null;
    /**
     * @type {Shape | undefined}
     */
    export let shape = null;
    /**
     * @type {boolean}
     */
    export let active = false;
    /**
     * @type {boolean}
     */
    export let block = false;
    /**
     * @type {boolean}
     */
    export let outline = false;
    /**
     * @type {boolean}
     */
    export let loading = false;
    /**
     * @type {boolean}
     */
    export let disabled = false;
    /**
     * @type {boolean}
     */
    export let noAnim = false;

    let className = null;
    /**
     * @type {string | undefined}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                          Classes
    // -----------------------------------------------------------

    const classNames = classes(
        'btn',
        {
            color: {
                condition: !!color,
                key: color,
                value: { ...BrandColor, ...FunctionalColor, ...AdditionalColor },
            },
            size: {
                condition: !!size,
                key: size,
                value: Size,
            },
            shape: {
                condition: !!shape,
                key: shape,
                value: ButtonShape,
            },
            active: {
                condition: active,
                value: 'active',
            },
            block: {
                condition: block && !shape,
                value: 'block',
            },
            outline: {
                condition: outline,
                value: 'outline',
            },
            loading: {
                condition: loading,
                value: 'loading',
            },
            noAnim: {
                condition: noAnim,
                value: 'no-animation',
            },
        },
        className,
    );
</script>

<button on:click class={classNames} {disabled}>
    <slot />
</button>

<style lang="scss">
    @import 'Button.scss';
</style>
