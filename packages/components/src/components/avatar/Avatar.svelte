<script>
    import { Size, classes } from '@svelte-daisyui/shared';
    import { AvatarStatus } from './avatar-status.enum';

    // -----------------------------------------------------------
    //  Type Definitions
    // -----------------------------------------------------------

    /**
     * @typedef {'tiny' | 'small' | 'medium' | 'large'} Size
     * @typedef {'online' | 'offline'} Status
     * @typedef {{ size?: Size, status: Status }} ScreenProps
     * @typedef {{ sm?: ScreenProps, md?: ScreenProps, lg?: ScreenProps, xl?: ScreenProps, '2xl'?: ScreenProps }} Screen
     */

    // -----------------------------------------------------------
    // Props
    // -----------------------------------------------------------

    /**
     * @type {string}
     */
    export let src = undefined;

    /**
     * @type {string}
     */
    export let alt = undefined;

    /**
     * @type {'tiny' | 'small' | 'medium' | 'large'}
     */
    export let size = undefined;

    /**
     * @type {'online' | 'offline'}
     */
    export let status = undefined;

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
        'avatar',
        {
            size: {
                value: Size,
            },
            status: {
                value: AvatarStatus,
            },
        },
        restClass,
        {
            size,
            status,
        },
        screen,
    );
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
