import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import preprocess from 'svelte-preprocess';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import sveld from 'sveld';
import { TAILWIND_CONFIG } from '@svelte-daisyui/shared';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.js',
            name: 'Components',
            fileName: (format) => `index.${format}.js`,
            formats: ['umd', 'es'],
        },
    },
    plugins: [
        svelte({
            emitCss: false,
            preprocess: preprocess({
                postcss: {
                    plugins: [
                        tailwindcss({
                            content: ['./src/**/*.{js,svelte,scss,sass}'],
                            theme: TAILWIND_CONFIG.theme,
                        }),
                        autoprefixer(),
                    ],
                },
            }),
        }),
        sveld({
            markdown: true,
        }),
    ],
});
