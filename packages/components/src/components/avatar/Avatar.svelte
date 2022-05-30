<script>
    import { Size, classes, AvatarStatus } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    //  Type Definitions
    // -----------------------------------------------------------

    /**
     * @restProps {div}
     *
     * @typedef {'online' | 'offline'} Status
     * @typedef {{ status: Status }} Properties
     * @typedef {{ sm?: Properties, md?: Properties, lg?: Properties, xl?: Properties, '2xl'?: Properties }} Screen
     */

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {Status}
     */
    export let status = undefined;

    /**
     * @type {string}
     */
    export let src = undefined;

    /**
     * @type {string}
     */
    export let alt = undefined;

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
        prefix: 'avatar',
        classProps: {
            status: { value: AvatarStatus },
        },
        props: { status },
        screen,
        restClass,
    });
</script>

<div class={classNames}>
    {#if src}
        <img {alt} {src} />
    {:else}
        <slot />
    {/if}
</div>

<style lang="scss">
    @import 'Avatar.scss';
</style>
