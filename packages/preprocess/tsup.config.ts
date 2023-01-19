import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    splitting: false,
    sourcemap: true,
    clean: true,
    format: 'esm',
    dts: true,
    // external: ['@svelte-daisyui/shared'],
    noExternal: ['@svelte-daisyui/styles'],
    loader: {
        '.scss': 'text',
    },
});
