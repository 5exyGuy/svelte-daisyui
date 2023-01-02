export function joinClasses(...classList: Array<string>) {
	return classList
		.filter(Boolean)
		.filter((className) => typeof className === 'string')
		.map((className) => className.trim())
		.join(' ');
}
