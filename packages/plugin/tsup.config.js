import { defineConfig } from 'tsup';

export default defineConfig((options) => {
    return {
        entry: ['src/index.ts'],
        minify: !options.watch,
        dts: !options.watch,
        splitting: false,
        sourcemap: true,
        clean: true,
        format: ['cjs', 'esm'],
        outDir: 'dist',
        esbuildPlugins: [],
        platform: 'browser',
    };
});
