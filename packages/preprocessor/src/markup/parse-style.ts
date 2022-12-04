import { STYLE_REGEX } from '../constants';
import { parseTagAttributes } from './parse-tag-attributes';

export function parseStyle(code: string) {
    const match = code.match(STYLE_REGEX);
    if (!match) return;

    const attributes = parseTagAttributes(match[1]!);
    const content = match[2]!;

    return { attributes, content };
}
