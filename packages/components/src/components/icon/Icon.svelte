<script>
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    //                           Props
    // -----------------------------------------------------------

    /**
     * @type {typeof import('svelte').SvelteComponent | undefined}
     */
    export let component;

    /**
     * @type {number | undefined}
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

    let className = '';
    /**
     * @type {string | undefined}
     */
    export { className as class };

    // -----------------------------------------------------------
    //                          Classes
    // -----------------------------------------------------------

    const classNames = classes(
        'icon',
        {
            spin: {
                condition: spin,
                value: 'spin',
            },
        },
        className,
    );
</script>

<div
    class={classNames}
    style={`height: ${size ?? height}rem; width: ${size ?? width}rem;`}
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
