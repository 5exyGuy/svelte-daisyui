import type { SvelteComponentTyped } from 'svelte';

export type SvelteSlots<T> = T extends SvelteComponentTyped<any, any, infer S>
    ? S
    : never;
