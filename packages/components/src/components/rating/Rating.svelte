<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { StringKeyOf } from 'type-fest';
    import { Size } from '../../enums';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends Omit<svelte.JSX.HTMLAttributes<HTMLDivElement>, 'size'> {
        size?: StringKeyOf<typeof Size>;
        half?: boolean;
        name: string;
        value?: number;
        max?: number;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'size'> {}
    interface $$ClassProps extends Pick<$$Props, 'size'> {}

    interface $$Events {
        change: CustomEvent<number>;
    }

    interface $$Slots {
        default: {};
        icon: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let size: $$Props['size'] = 'md';
    // export let half: $$Props['half'] = false;
    export let name: $$Props['name'] = undefined;
    export let value: $$Props['value'] = 0;
    export let max: $$Props['max'] = 5;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-rating';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(PREFIX, { size: Size }, { size }),
        generateResponsiveClasses<$$ResponsiveProps>(PREFIX, { size: Size }, screen, { size: true }),
        [restClass],
    );

    // -----------------------------------------------------------
    // Functionality
    // -----------------------------------------------------------

    const dispatch = createEventDispatcher();
</script>

<div role="group" class={classNames} {...$$restProps}>
    {#each Array(max) as _, index}
        <label for={`${name}-${index + 1}`}>
            <slot name="icon" />
        </label>
        <input
            bind:group={value}
            value={index + 1}
            type="radio"
            id={`${name}-${index + 1}`}
            {name}
            on:change={() => dispatch('change', value)}
        />
    {/each}
</div>

<style lang="scss" global>
    @import 'Rating.scss';
</style>
