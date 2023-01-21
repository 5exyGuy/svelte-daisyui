import type { Undefinedable } from '../../types';

export function joinClasses(...classList: Array<Undefinedable<string>>) {
    return (classList.filter(Boolean).filter((className) => typeof className === 'string') as Array<string>)
        .map((className) => className.trim())
        .join(' ');
}
