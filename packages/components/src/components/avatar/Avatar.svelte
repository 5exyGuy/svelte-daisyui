<script>
    import { classes, AvatarStatus } from '@svelte-daisyui/shared';
    import { getContext, onMount } from 'svelte';

    // -----------------------------------------------------------
    //  Type Definitions
    // -----------------------------------------------------------

    /**
     * @restProps {div}
     *
     * @typedef {'online' | 'offline'} Status
     */

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {Status}
     */
    export let status = undefined;

    /**
     * @type {svelte.JSX.HTMLAttributes<HTMLImageElement>}
     */
    export let imgProps = undefined;

    let restClass = undefined;
    /**
     * @type {string}
     */
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes({
        prefix: 'dui-avatar',
        classProps: { status: { value: AvatarStatus } },
        props: { status },
        restClass,
    });

    // -----------------------------------------------------------
    // Functionality
    // -----------------------------------------------------------

    let ref;

    const { add } = getContext('AvatarGroup');
</script>

<div class={classNames} {...$$restProps} bind:this={ref}>
    {#if imgProps}
        <!-- svelte-ignore a11y-missing-attribute -->
        <img {...imgProps} />
    {:else}
        <slot />
    {/if}
</div>

<style lang="scss" global>
    @import 'Avatar.scss';
</style>
