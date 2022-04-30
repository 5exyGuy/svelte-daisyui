import { TAILWIND_CONFIG } from '@svelte-daisyui/shared';
import { terser } from 'rollup-plugin-terser';
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import preprocess from 'svelte-preprocess';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import sveld from 'sveld';
import pkg from './package.json';

export default {
    input: 'src/index.js',
    output: [
        { file: pkg.module, format: 'es' },
        { file: pkg.main, format: 'umd', name: 'svelte-daisyui' },
    ],
    plugins: [
        svelte({
            emitCss: false,
            preprocess: preprocess({
                postcss: {
                    plugins: [
                        tailwindcss({
                            content: ['./src/**/*.{js,svelte}'],
                            theme: TAILWIND_CONFIG.theme,
                        }),
                        autoprefixer(),
                    ],
                },
            }),
        }),
        resolve(),
        commonjs(),
        terser(),
        sveld({
            markdown: true,
        }),
    ],
};
