<script>
    import { BrandColor, FunctionalColor } from '../../enums';
    import { classes } from '../../utils';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {string}
     */
    export let title = undefined;

    /**
     * @type {string}
     */
    export let value = undefined;

    /**
     * @type {string}
     */
    export let description = undefined;

    /**
     * @type {'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'}
     */
    export let background = undefined;

    let className = undefined;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'stat-item',
        {
            background: {
                condition: !!background,
                key: background,
                value: { ...BrandColor, ...FunctionalColor },
            },
        },
        className,
    );
</script>

<div class={classNames}>
    {#if $$slots.figure}
        <div class="stat-item-figure">
            <slot name="figure" />
        </div>
    {/if}
    {#if $$slots.title || title}
        <div class="stat-item-title">
            {#if $$slots.title}
                <slot name="title" />
            {:else if title}
                {title}
            {/if}
        </div>
    {/if}
    {#if $$slots.value || value}
        <div class="stat-item-value">
            {#if $$slots.value}
                <slot name="value" />
            {:else if value}
                {value}
            {/if}
        </div>
    {/if}
    {#if $$slots.description || description}
        <div class="stat-item-desc">
            {#if $$slots.description}
                <slot name="description" />
            {:else if description}
                {description}
            {/if}
        </div>
    {/if}
    {#if $$slots.actions}
        <div class="stat-item-actions">
            <slot name="actions" />
        </div>
    {/if}
</div>

<style lang="scss">
    @import 'StatItemStyled.scss';
    @import 'StatItemUnstyled.scss';
</style>
