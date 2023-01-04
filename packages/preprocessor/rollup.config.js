import esbuild from 'rollup-plugin-esbuild';
import { string } from 'rollup-plugin-string';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'es',
        sourcemap: true,
    },
    plugins: [esbuild(), commonjs(), json(), nodeResolve(), string({ include: /\.scss$/i })],
};
