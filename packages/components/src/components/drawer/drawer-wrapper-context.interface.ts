import type { Writable } from 'svelte/store';

export interface DrawerWrapperContext {
    name: string;
    setupStores(stores: { opened: Writable<boolean>; closeOnBlur: Writable<boolean> }): void;
}
