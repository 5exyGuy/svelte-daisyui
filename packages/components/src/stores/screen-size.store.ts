import { writable } from 'svelte/store';
import type { StringKeyOf } from 'type-fest';
import { ScreenSize } from '../enums';
import { ScreenSizeMinWidth } from '../enums/screen-size-min-width.enum';

export let screenSize = writable<'default' | StringKeyOf<typeof ScreenSize>>();
export let medias: Array<MediaQueryList> = [];
export let isMediaInitiated = false;

export const initMedia = () => {
    if (isMediaInitiated) return;

    isMediaInitiated = true;

    for (const screenSize in ScreenSize) {
        const media = window.matchMedia(`(min-width: ${ScreenSizeMinWidth[screenSize]})`);
        media.addEventListener('change', handleMediaChange);
        medias.push(media);
    }
};

const handleMediaChange = (event: MediaQueryListEvent) => {
    let test = 0;

    for (const media of medias) {
        if (!media.matches) {
            test++;
        }
    }

    console.log(test === medias.length);
};
