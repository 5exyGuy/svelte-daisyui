import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';
import { preprocess } from '@svelte-daisyui/preprocessor';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [sveltePreprocess(), preprocess()],

	kit: {
		adapter: adapter()
	}
};

export default config;
