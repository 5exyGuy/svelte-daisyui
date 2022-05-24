<script>
    import { classes } from '../../utils';
    import { CardPadding } from './card-padding.enum';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    /**
     * @type {boolean}
     */
    export let bordered = false;

    /**
     * @type {boolean}
     */
    export let fullImage = false;

    /**
     * @type {'normal' | 'compact'}
     */
    export let padding;

    /**
     * @type {boolean}
     */
    export let side = false;

    let className;
    /**
     * @type {string}
     */
    export { className as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = classes(
        'card',
        {
            bordered: {
                condition: bordered,
                value: 'bordered',
            },
            fullImage: {
                condition: fullImage,
                value: 'image-full',
            },
            padding: {
                condition: !!padding,
                key: padding,
                value: CardPadding,
            },
            size: {
                condition: side,
                value: 'side',
            },
        },
        className,
    );
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
