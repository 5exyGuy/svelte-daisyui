<script>
    import { Size, classes } from '@svelte-daisyui/shared';
    import { AvatarStatus } from './avatar-status.enum';

    // -----------------------------------------------------------
    //  Type Definitions
    // -----------------------------------------------------------

    /**
     * @typedef {'xs' | 'sm' | 'md' | 'lg'} Size
     * @typedef {'online' | 'offline'} Status
     * @typedef {{ size?: Size, status: Status }} Properties
     * @typedef {{ sm?: Properties, md?: Properties, lg?: Properties, xl?: Properties, '2xl'?: Properties }} Screen
     */

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------
    /**
     * @type {Properties['size']}
     */
    export let size = undefined;

    /**
     * @type {Properties['status']}
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
            size: {
                value: Size,
            },
            status: {
                value: AvatarStatus,
            },
        },
        props: {
            size,
            status,
        },
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
    @import 'AvatarStyled.scss';
    @import 'AvatarUnstyled.scss';
</style>
