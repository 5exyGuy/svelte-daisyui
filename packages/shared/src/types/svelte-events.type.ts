import type { SvelteComponentTyped } from 'svelte';

export type SvelteEvents<T> = T extends SvelteComponentTyped<any, infer E, any>
    ? E
    : never;
