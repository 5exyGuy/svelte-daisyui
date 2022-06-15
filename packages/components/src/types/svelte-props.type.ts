import type { SvelteComponentTyped } from 'svelte';

export type SvelteProps<T> = T extends SvelteComponentTyped<infer P, any, any> ? P : never;
