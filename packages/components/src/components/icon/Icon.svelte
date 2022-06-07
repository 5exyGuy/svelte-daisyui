<script>
    import { classes } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    //  Type Definitions
    // -----------------------------------------------------------

    /**
     * @restProps {div}
     *
     * @typedef {{ spin?: boolean }} Properties
     * @typedef {{ sm?: Properties, md?: Properties, lg?: Properties, xl?: Properties, '2xl'?: Properties }} Screen
     */

    // -----------------------------------------------------------
    // Properties
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

    $: classNames = classes({
        prefix: 'icon',
        classProps: { spin: { value: 'spin' } },
        props: { spin },
        screen,
        restClass,
    });
</script>

<div
    class={classNames}
    style={`height: ${size ?? height}em; width: ${size ?? width}em;`}
    {...$$restProps}
>
    {#if component}
        <svelte:component this={component} />
    {:else}
        <slot />
    {/if}
</div>

<style lang="scss">
    @import 'Icon.scss';
</style>
