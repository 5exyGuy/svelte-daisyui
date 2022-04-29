<script>
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     * @type {boolean}
     */
    export let open = false;

    /**
     * @type {boolean}
     */
    export let mobile = false;

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
        'drawer',
        {
            open: {
                condition: open,
                value: 'open',
            },
            mobile: {
                condition: mobile,
                value: 'mobile',
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
    <div class="drawer-content">
        {#if $$slots.default}
            <slot />
        {:else if $$slots.content}
            <slot name="content" />
        {/if}
    </div>
    <div class="drawer-side">
        <div class="drawer-overlay" />
        <slot name="side" />
    </div>
</div>

<style global lang="scss">
    @import 'DrawerStyled.scss';
    @import 'DrawerUnstyled.scss';
</style>
