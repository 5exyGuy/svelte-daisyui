import esbuild from 'rollup-plugin-esbuild';
import { string } from 'rollup-plugin-string';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'es',
        sourcemap: true,
    },
    plugins: [esbuild(), string({ include: '**/*.scss' })],
};
