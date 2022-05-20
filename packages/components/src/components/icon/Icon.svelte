<script>
    import { classes } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    //  Type Definitions
    // -----------------------------------------------------------

    /**
     * @typedef {{ spin?: boolean }} ScreenProps
     * @typedef {{ sm?: ScreenProps, md?: ScreenProps, lg?: ScreenProps, xl?: ScreenProps, '2xl'?: ScreenProps }} Screen
     */

    // -----------------------------------------------------------
    // Props
    // -----------------------------------------------------------

    /**
     * @type {typeof import('svelte').SvelteComponent}
     */
    export let component;

    /**
     * @type {number}
     */
    export let size;

    /**
     * @type {number}
     */
    export let height = 1;

    /**
     * @type {number}
     */
    export let width = 1;

    /**
     * @type {boolean}
     */
    export let spin = false;

    let restClass = undefined;
    /**
     * @type {string}
     */
    export { restClass as class };

    // -----------------------------------------------------------
    // Screen
    // -----------------------------------------------------------

    /**
     * @type {Screen}
     */
    export let screen = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'icon',
        {
            spin: {
                value: 'spin',
            },
        },
        restClass,
        { spin },
        screen,
    );
</script>

<div
    class={classNames}
    style={`height: ${size ?? height}em; width: ${size ?? width}em;`}
>
    {#if component}
        <svelte:component this={component} />
    {:else}
        <slot />
    {/if}
</div>

<style lang="scss">
    @import 'IconStyled.scss';
    @import 'IconUnstyled.scss';
</style>
