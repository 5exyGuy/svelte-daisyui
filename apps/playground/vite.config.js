import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';
import tailwindcss from 'tailwindcss';
import daisyuiPlugin from '@svelte-daisyui/plugin';
import { TAILWIND_CONFIG } from '@svelte-daisyui/shared';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svelte({
            preprocess: preprocess({
                sass: true,
                scss: true,
                postcss: {
                    plugins: [
                        tailwindcss({
                            // ...TAILWIND_CONFIG,
                            plugins: [daisyuiPlugin],
                        }),
                    ],
                },
            }),
        }),
    ],
});
