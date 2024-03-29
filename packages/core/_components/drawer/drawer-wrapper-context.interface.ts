import type { Writable } from 'svelte/store';

export interface DrawerWrapperContext {
    name: string;
    setContainer(container: { opened: Writable<boolean>; closeOnBlur: Writable<boolean> }): void;
}
