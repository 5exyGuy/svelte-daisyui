<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';
    import { CardPadding } from './card-padding.enum';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        padding?: StringKeyOf<typeof CardPadding>;
        bordered?: boolean;
        fullImage?: boolean;
        side?: boolean;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'padding' | 'bordered' | 'fullImage' | 'side'> {}
    interface $$ClassProps extends Pick<$$Props, 'padding' | 'bordered' | 'fullImage' | 'side'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
        title: {
            className: 'dui-card-title';
        };
        actions: {
            className: 'dui-card-actions';
        };
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let padding: $$Props['padding'] = 'normal';
    export let bordered: $$Props['bordered'] = false;
    export let fullImage: $$Props['fullImage'] = false;
    export let side: $$Props['side'] = false;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-card';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(
            PREFIX,
            { bordered: 'bordered', fullImage: 'image-full', side: 'side', padding: CardPadding },
            { padding, bordered, fullImage, side },
        ),
        generateResponsiveClasses<$$ResponsiveProps>(
            PREFIX,
            { bordered: 'bordered', fullImage: 'image-full', side: 'side', padding: CardPadding },
            screen,
            { bordered: true, fullImage: true, side: true, padding: true },
        ),
        [restClass],
    );
</script>

<div class={classNames} {...$$restProps}>
    <slot name="upper" />
    {#if $$slots.body || $$slots.title || $$slots.actions}
        <div class="dui-card-body">
            {#if $$slots.title}
                <slot className="dui-card-title" name="title" />
            {/if}
            <slot name="body" />
            {#if $$slots.actions}
                <slot className="dui-card-actions" name="actions" />
            {/if}
        </div>
    {/if}
    <slot name="lower" />
</div>

<style lang="scss" global>
    @import 'Card.scss';
</style>
