import adapter from '@sveltejs/adapter-auto';
import { daisyuiPreprocess } from '@svelte-daisyui/preprocessor';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		daisyuiPreprocess({
			modulePath: '$lib/components'
		}),
		vitePreprocess()
	],

	kit: {
		adapter: adapter()
	},

	package: {}
};

export default config;
