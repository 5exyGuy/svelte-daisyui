<script>
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    let className;
    /**
     * @type {string}
     */
    export { className as class };

    /**
     * @type {string}
     */
    export let style;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes('hero', {}, className);
</script>

<div class={classNames} {style}>
    {#if $$slots.overlay}
        <div class="hero-overlay">
            <slot name="overlay" />
        </div>
    {/if}
    <div class="hero-content">
        {#if !$$slots.default && $$slots.content}
            <slot name="content" />
        {/if}
        <slot />
    </div>
</div>

<style lang="scss">
    @import 'HeroStyled.scss';
    @import 'HeroUnstyled.scss';
</style>
