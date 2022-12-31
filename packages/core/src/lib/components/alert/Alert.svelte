<script lang="ts">
	import { generateDefaultClasses, generateResponsiveClasses, joinClasses } from '../../utilities';
	// import MdInfoOutline from 'svelte-icons/md/MdInfoOutline.svelte';
	// import FaRegCheckCircle from 'svelte-icons/fa/FaRegCheckCircle.svelte';
	// import MdWarning from 'svelte-icons/md/MdWarning.svelte';
	// import MdErrorOutline from 'svelte-icons/md/MdErrorOutline.svelte';
	import Icon from '../icon/Icon.svelte';
	import type { AlertProps } from '@svelte-daisyui/shared';

	// -----------------------------------------------------------
	// Properties
	// -----------------------------------------------------------

	export let color: AlertProps['color'] = 'base';
	export let icon: AlertProps['icon'] = undefined;
	export let message: AlertProps['message'] = undefined;
	export let showIcon: AlertProps['showIcon'] = true;
	let restClass: string = undefined;
	export { restClass as class };

	// -----------------------------------------------------------
	// Classes and Styles
	// -----------------------------------------------------------

	const PREFIX = 'dui-alert';
	const COLORS = { ...BrandColor, ...FunctionalColor, ...{ base: 'base' } };

	$: classNames = joinClasses(
		[PREFIX],
		generateDefaultClasses<$$ClassProps>(PREFIX, { color: COLORS }, { color }),
		generateResponsiveClasses<$$ResponsiveProps>(PREFIX, { color: COLORS }, screen, {
			color: true
		}),
		[restClass]
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
