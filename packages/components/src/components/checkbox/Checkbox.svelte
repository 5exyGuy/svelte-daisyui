<script>
    import { BrandColor, FunctionalColor } from '../../enums';
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     * @type {boolean}
     */
    export let checked = false;

    /**
     * @type {boolean}
     */
    export let disabled = false;

    /**
     * @type {boolean}
     */
    export let indeterminate = false;

    /**
     * @type {'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | undefined}
     */
    export let color;

    let className;
    /**
     * @type {string | undefined}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    const classNames = classes(
        'checkbox',
        {
            color: {
                condition: !!color,
                key: color,
                value: { ...BrandColor, ...FunctionalColor },
            },
        },
        className,
    );
</script>

<input
    class={classNames}
    type="checkbox"
    {checked}
    on:change
    {disabled}
    {indeterminate}
/>

<style lang="scss">
    @import 'CheckboxStyled.scss';
    @import 'CheckboxUnstyled.scss';
</style>
