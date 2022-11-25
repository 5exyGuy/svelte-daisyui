import { STYLE_REGEX } from '../constants';
import { getAttributes } from './get-attributes.utility';

export function getSvelteStyle(code: string) {
    const match = code.match(STYLE_REGEX);
    if (!match) return;

    const attributes = getAttributes(match[1]!);
    const content = match[2]!;

    return { attributes, content };
}
