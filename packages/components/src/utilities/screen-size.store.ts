import { Writable, writable } from 'svelte/store';
import { ScreenSize } from '../enums';
import { ScreenSizeMinWidth } from '../enums/screen-size-min-width.enum';
import type { Screen } from '../types';

const medias: Map<string, MediaQueryList> = new Map();
let isMediaInitiated = false;

export function initMedia() {
    if (isMediaInitiated) return;
    isMediaInitiated = true;

    for (const screenSize in ScreenSize) {
        const mediaQuery = `(min-width: ${ScreenSizeMinWidth[screenSize]})`;
        const media = window.matchMedia(`(min-width: ${ScreenSizeMinWidth[screenSize]})`);
        media.addEventListener('change', handleMediaChange);
        medias.set(mediaQuery, media);
    }
}

export function createResponsiveProps<T>(screen: Screen<T>, props: T) {
    initMedia();

    const responsiveProps: Record<string, Writable<unknown>> = {};

    for (const [name, value] of Object.entries(props)) {
        const writableProp = writable(value);
    }

    return responsiveProps;
}

export function removeResponsiveProps<T>() {}

function isDefaultScreenSize() {
    for (const [_mediaQuery, media] of medias) if (media.matches) return false;
    return true;
}

const handleMediaChange = (event: MediaQueryListEvent) => {};
