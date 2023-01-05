import { STYLE_REGEX } from '../constants';
import { parseElementAttributes } from './parse-element-attributes';

export function parseStyle(code: string) {
    const match = STYLE_REGEX.exec(code);
    if (!match) return;

    const attributes = parseElementAttributes(match[1]!);
    const content = match[2]!;

    return { attributes, content };
}
