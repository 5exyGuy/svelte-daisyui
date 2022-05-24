<script>
    import { classes, CardPadding } from '@svelte-daisyui/shared';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    /**

     * @typedef {'normal' | 'compact'} Padding
     * @typedef {{ padding?: Padding }} Properties
     * @typedef {{ sm?: Properties, md?: Properties, lg?: Properties, xl?: Properties, '2xl'?: Properties }} Screen
     */

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {Properties['padding']}
     */
    export let padding = undefined;

    /**
     * @type {boolean}
     */
    export let bordered = false;

    /**
     * @type {boolean}
     */
    export let fullImage = false;

    /**
     * @type {boolean}
     */
    export let side = false;

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
        prefix: 'card',
        classProps: {
            bordered: {
                value: 'bordered',
            },
            fullImage: {
                value: 'image-full',
            },
            padding: {
                value: CardPadding,
            },
            side: {
                value: 'side',
            },
        },
        props: { bordered, fullImage, padding, side },
        screen,
        restClass,
    });
</script>

<div class={classNames}>
    <slot name="upper" />
    <div class="card-body">
        {#if $$slots.title}
            <h2 class="card-title">
                <slot name="title" />
            </h2>
        {/if}
        <slot name="body" />
        {#if $$slots.actions}
            <div class="card-actions">
                <slot name="actions" />
            </div>
        {/if}
    </div>
    <slot name="lower" />
</div>

<style lang="scss">
    @import 'CardStyled.scss';
    @import 'CardUnstyled.scss';
</style>
