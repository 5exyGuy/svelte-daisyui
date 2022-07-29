interface ScrollLockOptions {
    paddingRight?: boolean;
}

export function lockSroll(element: HTMLElement = document.body, { paddingRight = true }: ScrollLockOptions = {}) {
    if (paddingRight) {
        const scrollbarWidth =
            window.innerWidth -
            document.documentElement.clientWidth +
            parseInt(window.getComputedStyle(element).paddingRight, 10);
        document.body.style.paddingRight = `${scrollbarWidth}px !important`;
    }
    element.style.overflow = 'hidden !important';
    element.style.touchAction = 'none !important';
}

export function unlockScroll(element: HTMLElement = document.body) {
    element.style.removeProperty('overflow');
    element.style.removeProperty('touch-action');
    element.style.removeProperty('padding-right');
    if (element.style.length === 0) element.removeAttribute('style');
}
