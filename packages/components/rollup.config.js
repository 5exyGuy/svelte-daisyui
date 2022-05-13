import { terser } from 'rollup-plugin-terser';
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import preprocess from 'svelte-preprocess';
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
            preprocess: preprocess({ postcss: true }),
        }),
        resolve(),
        commonjs(),
        terser(),
        sveld({
            markdown: true,
        }),
    ],
};
