import adapter from '@sveltejs/adapter-auto';
import { daisyuiPreprocess } from '@svelte-daisyui/preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: [
        daisyuiPreprocess({
            dev: { componentLibPath: '$lib' },
        }),
        vitePreprocess(),
    ],
    kit: {
        files: {
            lib: 'src',
            routes: 'routes',
            appTemplate: 'routes/app.html',
        },
        alias: {
            $lib: 'src',
            '$lib/*': 'src/*',
        },
        adapter: adapter(),
    },
};

export default config;
