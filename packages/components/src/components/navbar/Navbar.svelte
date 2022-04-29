<script>
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    // export let background: BrandColorKey | FunctionalColorKey | BaseColorKey =
    //     'Base-100';
    /**
     * @type {boolean}
     */
    export let rounded = false;

    let className;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                     Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'navbar',
        {
            rounded: {
                condition: rounded,
                value: 'rounded',
            },
        },
        className,
    );
</script>

<div class={classNames}>
    {#if $$slots.default}
        <slot />
    {/if}
    {#if !$$slots.default && $$slots.start}
        <div class="navbar-start">
            <slot name="start" />
        </div>
    {/if}
    {#if !$$slots.default && $$slots.center}
        <div class="navbar-center">
            <slot name="center" />
        </div>
    {/if}
    {#if !$$slots.default && $$slots.end}
        <div class="navbar-end">
            <slot name="end" />
        </div>
    {/if}
</div>

<style lang="scss">
    @import 'NavbarStyled.scss';
    @import 'NavbarUnstyled.scss';
</style>
