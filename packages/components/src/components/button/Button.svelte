<script>
    import {
        BrandColor,
        FunctionalColor,
        Size,
        AdditionalColor,
    } from '../../enums';
    import { ButtonShape } from './button-shape.enum';
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     * @type {'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'ghost' | 'link'}
     */
    export let color;

    /**
     * @type {'tiny' | 'small' | 'medium' | 'large'}
     */
    export let size;

    /**
     * @type {'square' | 'circle'}
     */
    export let shape;

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
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'btn',
        {
            color: {
                condition: !!color,
                key: color,
                value: {
                    ...BrandColor,
                    ...FunctionalColor,
                    ...AdditionalColor,
                },
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
