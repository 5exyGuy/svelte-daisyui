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

export function focusTrap(node: HTMLElement, enabled = true) {
    const focusableElements = Array.from(node.querySelectorAll(FOCUSABLE_ELEMENTS.join(','))) as Array<HTMLElement>;
    let oldFocusedElement = document.activeElement as HTMLElement;
    let currentFocusedElement = oldFocusedElement;

    function nextElement(event: KeyboardEvent) {
        if (!(!event.shiftKey && event.key === 'Tab')) return;

        if (!node.contains(currentFocusedElement)) {
            currentFocusedElement = focusableElements[0]!;
            focusableElements[0] && focusableElements[0].focus();
            event.preventDefault();
            return;
        }

        const index = focusableElements.indexOf(currentFocusedElement);
        if (index === -1) return;

        if (focusableElements.length === index + 1) {
            currentFocusedElement = focusableElements[0]!;
            focusableElements[0] && focusableElements[0].focus();
            event.preventDefault();
            return;
        }

        currentFocusedElement = focusableElements[index + 1]!;
        focusableElements[index + 1] && focusableElements[index + 1]!.focus();
        event.preventDefault();
    }

    function previousElement(event: KeyboardEvent) {
        if (!(event.shiftKey && event.key === 'Tab')) return;

        if (!node.contains(currentFocusedElement)) {
            currentFocusedElement = focusableElements[focusableElements.length - 1]!;
            focusableElements[focusableElements.length - 1] && focusableElements[focusableElements.length - 1]!.focus();
            event.preventDefault();
            return;
        }

        const index = focusableElements.indexOf(currentFocusedElement);
        if (index === -1) return;

        if (index === 0) {
            currentFocusedElement = focusableElements[focusableElements.length - 1]!;
            focusableElements[focusableElements.length - 1] && focusableElements[focusableElements.length - 1]!.focus();
            event.preventDefault();
            return;
        }

        currentFocusedElement = focusableElements[index - 1]!;
        focusableElements[index - 1] && focusableElements[index - 1]!.focus();
        event.preventDefault();
    }

    function update(enabled: boolean) {
        if (!enabled) {
            window.removeEventListener('keydown', nextElement);
            window.removeEventListener('keydown', previousElement);
            oldFocusedElement && oldFocusedElement.focus();
            return;
        }

        oldFocusedElement = document.activeElement as HTMLElement;
        currentFocusedElement = oldFocusedElement;

        window.addEventListener('keydown', nextElement);
        window.addEventListener('keydown', previousElement);

        focusableElements[0] && focusableElements[0].focus();
    }
    function destroy() {
        window.removeEventListener('keydown', nextElement);
        window.removeEventListener('keydown', previousElement);

        oldFocusedElement.focus();
    }

    update(enabled);

    return {
        update,
        destroy,
    };
}
