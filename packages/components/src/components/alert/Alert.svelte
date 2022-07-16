<script lang="ts">
    import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';
    import { BrandColor, FunctionalColor } from '../../enums';
    import MdInfoOutline from 'svelte-icons/md/MdInfoOutline.svelte';
    import FaRegCheckCircle from 'svelte-icons/fa/FaRegCheckCircle.svelte';
    import MdWarning from 'svelte-icons/md/MdWarning.svelte';
    import MdErrorOutline from 'svelte-icons/md/MdErrorOutline.svelte';
    import Icon from '../icon/Icon.svelte';
    import type { StringKeyOf } from 'type-fest';
    import type { Screen } from '../../types';
    import type { SvelteComponent } from 'svelte';

    // -----------------------------------------------------------
    // Type Definitions
    // -----------------------------------------------------------

    interface $$Props extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
        color?: StringKeyOf<typeof BrandColor & typeof FunctionalColor> | 'base';
        showIcon?: boolean;
        icon?: typeof SvelteComponent;
        message?: string;
        screen?: Screen<$$ResponsiveProps>;
    }
    interface $$ResponsiveProps extends Pick<$$Props, 'color'> {}
    interface $$ClassProps extends Pick<$$Props, 'color'> {}

    interface $$Events {}

    interface $$Slots {
        default: {};
    }

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let color: $$Props['color'] = 'base';
    export let icon: $$Props['icon'] =
        color === 'info'
            ? MdInfoOutline
            : color === 'success'
            ? FaRegCheckCircle
            : color === 'warning'
            ? MdWarning
            : color === 'error'
            ? MdErrorOutline
            : undefined;
    export let message: $$Props['message'] = undefined;
    export let showIcon: $$Props['showIcon'] = true;
    let restClass: $$Props['class'] = undefined;
    export { restClass as class };
    export let screen: $$Props['screen'] = undefined;

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    const PREFIX = 'dui-alert';
    const COLORS = { ...BrandColor, ...FunctionalColor, ...{ base: 'base' } };

    $: classNames = joinClasses(
        [PREFIX],
        generateDefaultClasses<$$ClassProps>(PREFIX, { color: COLORS }, { color }),
        generateResponsiveClasses<$$ResponsiveProps>(PREFIX, { color: COLORS }, screen, { color: true }),
        [restClass],
    );
</script>

<div class={classNames} {...$$restProps}>
    {#if $$slots.default}
        <slot />
    {:else if $$slots.content}
        <div>
            {#if showIcon}
                <Icon size={1.5} component={icon} />
            {/if}
            <slot name="content" />
        </div>
    {:else if message}
        <div>
            {#if showIcon}
                <Icon size={1.5} component={icon} />
            {/if}
            <span>{message}</span>
        </div>
    {/if}
    {#if $$slots.actions}
        <div class="dui-alert-actions">
            <slot name="actions" />
        </div>
    {/if}
</div>

<style lang="scss" global>
    @import 'Alert.scss';
</style>
