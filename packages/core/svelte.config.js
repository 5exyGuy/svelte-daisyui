import adapter from '@sveltejs/adapter-auto';
import { preprocess as daisyuiPreprocess } from '@svelte-daisyui/preprocessor';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [daisyuiPreprocess(), vitePreprocess()],

	kit: {
		files: {
			lib: 'src',
			routes: 'routes',
			appTemplate: 'routes/app.html'
		},
		adapter: adapter()
	}
};

export default config;
