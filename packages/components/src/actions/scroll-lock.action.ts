interface ScrollLockOptions {
    enabled?: boolean;
}

export function scrollLock(element: HTMLElement, { enabled = true }: ScrollLockOptions) {
    return {
        update() {},
        destroy() {},
    };
}
