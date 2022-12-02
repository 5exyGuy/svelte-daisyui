import esbuild from 'rollup-plugin-esbuild';
import { rollup } from 'rollup';
import { string } from 'rollup-plugin-string';

export default rollup({
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'es',
        sourcemap: true,
    },
    plugins: [esbuild(), string({ include: '**/*.scss' })],
});
