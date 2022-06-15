import type { Writable } from 'svelte/store';

export interface AvatarGroupContext {
    avatars: Writable<Array<HTMLDivElement>>;
    add: (ref: HTMLDivElement) => void;
}
