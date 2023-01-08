import adapter from '@sveltejs/adapter-auto';
import { daisyuiPreprocess } from '@svelte-daisyui/preprocessor';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: [
        daisyuiPreprocess({
            modulePath: '$lib',
        }),
        vitePreprocess({
            style: {},
        }),
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
