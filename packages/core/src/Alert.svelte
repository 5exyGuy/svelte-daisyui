<script lang="ts">
    import {
        AlertSchema,
        generateComponentClasses,
        joinClasses,
        type AlertComponentProps,
        type Nullable,
    } from '@svelte-daisyui/shared';
    // import MdInfoOutline from 'svelte-icons/md/MdInfoOutline.svelte';
    // import FaRegCheckCircle from 'svelte-icons/fa/FaRegCheckCircle.svelte';
    // import MdWarning from 'svelte-icons/md/MdWarning.svelte';
    // import MdErrorOutline from 'svelte-icons/md/MdErrorOutline.svelte';
    // import Icon from '../icon/Icon.svelte';

    // -----------------------------------------------------------
    // Properties
    // -----------------------------------------------------------

    export let color: AlertComponentProps['color'] = 'base';
    // export let icon: Nullable<AlertProps['icon']> = undefined;
    export let message: Nullable<AlertComponentProps['message']> = undefined;
    // export let showIcon: AlertProps['showIcon'] = true;
    let restClass: Nullable<string> = undefined;
    export { restClass as class };

    // -----------------------------------------------------------
    // Classes and Styles
    // -----------------------------------------------------------

    $: classNames = joinClasses(
        AlertSchema.name.toLowerCase(),
        generateComponentClasses<AlertComponentProps>(AlertSchema, { color }),
        restClass ?? '',
    );
</script>

<div class={classNames} {...$$restProps}>
    {#if $$slots.default}
        <slot />
    {:else if $$slots.content}
        <div class="alert-icon">
            <!-- {#if showIcon}
				<Icon size={1.5} component={icon} />
			{/if} -->
            <slot name="content" />
        </div>
    {:else if message}
        <div>
            <!-- {#if showIcon}
				<Icon size={1.5} component={icon} />
			{/if} -->
            <span>{message}</span>
        </div>
    {/if}
    {#if $$slots.actions}
        <div class="alert-actions">
            <slot name="actions" />
        </div>
    {/if}
</div>

<style lang="scss" global>
    @use '@svelte-daisyui/styles/_alert.scss';

    @include alert.default();
</style>
