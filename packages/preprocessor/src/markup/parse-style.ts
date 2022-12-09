import { STYLE_REGEX } from '../constants';
import { parseElementAttributes } from './parse-element-attributes';

export function parseStyle(code: string) {
    const match = code.match(STYLE_REGEX);
    if (!match) return;

    const attributes = parseElementAttributes(match[1]!);
    const content = match[2]!;

    return { attributes, content };
}
