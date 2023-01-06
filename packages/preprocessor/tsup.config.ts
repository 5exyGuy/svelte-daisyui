import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    splitting: false,
    sourcemap: true,
    clean: true,
    format: 'esm',
    dts: true,
    noExternal: ['@svelte-daisyui/styles'],
    loader: {
        '.scss': 'text',
    },
});
