import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-node-externals';
import ts from 'rollup-plugin-ts';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: 'dist/index.es.js',
            format: 'es',
            sourcemap: true,
        },
    ],
    plugins: [external(), resolve(), commonjs(), ts(), terser()],
};
