<script lang="ts" context="module">
	import { AlertSchema } from '@svelte-daisyui/shared';

	const alertSchema = AlertSchema.create();
</script>

<script lang="ts">
	import type { Nullable } from '@svelte-daisyui/shared';
	import { generateComponentClasses, joinClasses } from './utilities';
	// import MdInfoOutline from 'svelte-icons/md/MdInfoOutline.svelte';
	// import FaRegCheckCircle from 'svelte-icons/fa/FaRegCheckCircle.svelte';
	// import MdWarning from 'svelte-icons/md/MdWarning.svelte';
	// import MdErrorOutline from 'svelte-icons/md/MdErrorOutline.svelte';
	// import Icon from '../icon/Icon.svelte';
	import type { AlertProps } from '@svelte-daisyui/shared';

	// -----------------------------------------------------------
	// Properties
	// -----------------------------------------------------------

	export let color: AlertProps['color'] = 'base';
	// export let icon: Nullable<AlertProps['icon']> = undefined;
	export let message: Nullable<AlertProps['message']> = undefined;
	// export let showIcon: AlertProps['showIcon'] = true;
	let restClass: Nullable<string> = undefined;
	export { restClass as class };

	// -----------------------------------------------------------
	// Classes and Styles
	// -----------------------------------------------------------

	$: classNames = joinClasses(
		alertSchema.name.toLowerCase(),
		generateComponentClasses<AlertProps>(alertSchema, { color }),
		restClass ?? ''
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
	@use '@svelte-daisyui/styles/alert.scss';

	@include alert.default();
</style>
