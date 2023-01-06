import { defineConfig } from 'tsup';
// import { sassPlugin } from 'esbuild-sass-plugin';

export default defineConfig({
    entry: ['src/index.ts'],
    splitting: false,
    sourcemap: true,
    clean: true,
    format: 'esm',
    dts: true,
});
