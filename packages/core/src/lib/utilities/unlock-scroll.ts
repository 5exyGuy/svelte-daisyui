export function unlockScroll(element: HTMLElement = document.body) {
	element.style.removeProperty('overflow');
	element.style.removeProperty('touch-action');
	element.style.removeProperty('padding-right');
	if (element.style.length === 0) element.removeAttribute('style');
}
