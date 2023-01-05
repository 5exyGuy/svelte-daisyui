<script lang="ts">
    import type { CSSUnit } from '@svelte-daisyui/shared';
    import type { SvelteComponent } from 'svelte';
    import type { Screen } from '../../types';
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends Omit<svelte.JSX.HTMLAttributes<HTMLDivElement>, 'size'> {
        component?: typeof SvelteComponent;
        size?: CSSUnit;
        height?: CSSUnit;
        width?: CSSUnit;
        spin?: boolean;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'size' | 'height' | 'width' | 'spin'> {}
    interface $$ClassProps extends Pick<$$Props, 'spin'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let component: $$Props['component'] = undefined;
    export let size: $$Props['size'] = undefined;
    export let height: $$Props['height'] = '1rem';
    export let width: $$Props['width'] = '1rem';
    export let spin: $$Props['spin'] = false;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-icon';

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(PREFIX, { spin: 'spin' }, { spin }),
        generateResponsiveClasses<$$ResponsiveProps>(PREFIX, { spin: 'spin' }, screen, {
            height: false,
            size: false,
            spin: true,
            width: false,
        }),
        [restClass],
    );
</script>

<div class={classNames} style:height={`${size ?? height}rem`} style:width={`${size ?? width}rem`} {...$$restProps}>
    {#if component}
        <svelte:component this={component} />
    {:else}
        <slot />
    {/if}
</div>

<style lang="scss">
    @import 'Icon.scss';
</style>
