import type { Writable } from 'svelte/store';

export interface AvatarGroupContext {
    avatars: Writable<any[]>;
    add: (ref: HTMLDivElement) => void;
}
