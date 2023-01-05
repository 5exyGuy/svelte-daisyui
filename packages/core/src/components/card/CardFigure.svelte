<script lang="ts">
    import { joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLElement> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    let restClass: $$Props['class'] = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-card-figure';

    $: classNames = joinClasses([PREFIX], [restClass]);
</script>

<figure class={classNames} {...$$restProps}>
    <slot />
</figure>

<style lang="scss" global>
    @import 'CardFigure.scss';
</style>
