<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import { HorizontalAlignment, VerticalAlignment } from '../../enums';
    import { generateDefaultClasses, joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        alignment?: StringKeyOf<typeof VerticalAlignment>;
        justify?: StringKeyOf<typeof HorizontalAlignment>;
    }
    interface $$ClassProps extends Pick<$$Props, 'alignment' | 'justify'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let alignment: $$Props['alignment'] = 'top';
    export let justify: $$Props['justify'] = 'start';
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-card-actions';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(
            PREFIX,
            { alignment: VerticalAlignment, justify: HorizontalAlignment },
            { alignment, justify },
        ),
        [restClass],
    );
</script>

<div class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'CardActions.scss';
</style>
