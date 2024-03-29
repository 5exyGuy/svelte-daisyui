<script lang="ts">
    import { onMount } from 'svelte';

    import type { StringKeyOf } from 'type-fest';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';
    import { SwapAnimation } from './swap-animation.enum';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        animation?: StringKeyOf<typeof SwapAnimation>;
        state?: boolean;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'animation'> {}
    interface $$ClassProps extends Pick<$$Props, 'animation'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let animation: $$Props['animation'] = undefined;
    export let state: $$Props['state'] = false;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-swap';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(PREFIX, { animation: SwapAnimation }, { animation }),
        generateResponsiveClasses<$$ResponsiveProps>(PREFIX, { animation: SwapAnimation }, screen, { animation: true }),
        [restClass],
    );

    // -----------------------------------------------------------
    //                       Functionality
    // -----------------------------------------------------------

    let elementRef: HTMLDivElement;

    onMount(() => {
        while (elementRef.children.length > 2) {
            elementRef.removeChild(elementRef.lastChild);
        }
    });

    const changeState = () => (state = !state);
</script>

<div class={classNames} on:click={changeState} on:click data-state={state} bind:this={elementRef} {...$$restProps}>
    <slot />
</div>

<style lang="scss" global>
    @import 'Swap.scss';
</style>
