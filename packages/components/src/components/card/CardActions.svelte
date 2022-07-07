<script lang="ts">
    import type { StringKeyOf } from 'type-fest';
    import { HorizontalAlignment } from '../../enums';
    import { generateDefaultClasses, joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        alignment?: StringKeyOf<typeof HorizontalAlignment>;
    }

    interface $$ClassProps extends Pick<$$Props, 'alignment'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let alignment: $$Props['alignment'] = 'start';
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-card-actions';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(PREFIX, { alignment: HorizontalAlignment }, { alignment }),
        [restClass],
    );
</script>

<div class={classNames} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'CardActions.scss';
</style>
