import type { Writable } from 'svelte/store';

export interface DrawerWrapperContext {
    opened: Writable<boolean>;
}
