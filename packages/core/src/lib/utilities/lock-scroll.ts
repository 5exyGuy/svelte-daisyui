export function lockSroll(element: HTMLElement = document.body, { paddingRight = true }) {
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
