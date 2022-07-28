const FOCUSABLE_ELEMENTS = [
    'a[href]',
    'area[href]',
    'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
    'select:not([disabled]):not([aria-hidden])',
    'textarea:not([disabled]):not([aria-hidden])',
    'button:not([disabled]):not([aria-hidden])',
    'iframe',
    'object',
    'embed',
    '[contenteditable]',
    '[tabindex]:not([tabindex^="-"])',
];

interface FocusTrapOptions {
    enabled?: boolean;
}

export function focusTrap(element: HTMLElement, { enabled = true }: FocusTrapOptions = {}) {
    if (!enabled) return;

    const focusableElements = [...element.querySelectorAll(FOCUSABLE_ELEMENTS.join(','))].filter((element) => {
        let computedStyle = document.defaultView.getComputedStyle(element, null);
        return (
            computedStyle.getPropertyValue('display') !== 'none' &&
            computedStyle.getPropertyValue('visibility') !== 'hidden'
        );
    }) as Array<HTMLElement>;
    const oldFocusedElement = document.activeElement as HTMLElement;
    let currentFocusedElement = oldFocusedElement;

    const nextElement = (event: KeyboardEvent) => {
        if (!(!event.shiftKey && event.key === 'Tab')) return;
        event.preventDefault();

        if (!element.contains(currentFocusedElement)) {
            currentFocusedElement = focusableElements[0];
            focusableElements[0] && focusableElements[0].focus();
            return;
        }

        const index = focusableElements.indexOf(currentFocusedElement);
        if (index === -1) return;

        if (focusableElements.length === index + 1) {
            currentFocusedElement = focusableElements[0];
            focusableElements[0] && focusableElements[0].focus();
            return;
        }

        currentFocusedElement = focusableElements[index + 1];
        focusableElements[index + 1] && focusableElements[index + 1].focus();
    };

    const previousElement = (event: KeyboardEvent) => {
        if (!(event.shiftKey && event.key === 'Tab')) return;
        event.preventDefault();

        if (!element.contains(currentFocusedElement)) {
            currentFocusedElement = focusableElements[focusableElements.length - 1];
            focusableElements[focusableElements.length - 1] && focusableElements[focusableElements.length - 1].focus();
            return;
        }

        const index = focusableElements.indexOf(currentFocusedElement);
        if (index === -1) return;

        if (index === 0) {
            currentFocusedElement = focusableElements[focusableElements.length - 1];
            focusableElements[focusableElements.length - 1] && focusableElements[focusableElements.length - 1].focus();
            return;
        }

        currentFocusedElement = focusableElements[index - 1];
        focusableElements[index - 1] && focusableElements[index - 1].focus();
    };

    window.addEventListener('keydown', nextElement);
    window.addEventListener('keydown', previousElement);

    return {
        update() {
            if (!enabled) {
                window.removeEventListener('keydown', nextElement);
                window.removeEventListener('keydown', previousElement);
                oldFocusedElement && oldFocusedElement.focus();
                return;
            }

            window.addEventListener('keydown', nextElement);
            window.addEventListener('keydown', previousElement);
        },
        destroy() {
            console.log('[focus-trap] destroy');
            currentFocusedElement.focus();
            window.removeEventListener('keydown', nextElement);
            window.removeEventListener('keydown', previousElement);
        },
    };
}
