<script lang="ts">
    import { joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {}

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

    const PREFIX = 'dui-card-title';

    $: classNames = joinClasses([PREFIX], [restClass]);
</script>

<h2 class={classNames} {...$$restProps}>
    <slot />
</h2>

<style lang="scss" global>
    @import 'CardTitle.scss';
</style>
