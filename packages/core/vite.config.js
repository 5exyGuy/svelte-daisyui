import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    optimizeDeps: {
        include: [
            // '@svelte-daisyui/shared',
            // '@svelte-daisyui/preprocess',
            // '@svelte-daisyui/styles'
        ],
    },
};

export default config;
