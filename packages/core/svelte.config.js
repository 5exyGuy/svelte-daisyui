import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { preprocessor as daisyuiPreprocessor } from '@svelte-daisyui/preprocessor';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess(), daisyuiPreprocessor()],

	kit: {
		adapter: adapter()
	}
};

export default config;
