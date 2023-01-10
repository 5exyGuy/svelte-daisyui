import { STYLE_REGEX } from '../constants';
import { parseElementAttributes } from './parse-element-attributes';

export function parseStyle(code: string) {
    const match = STYLE_REGEX.exec(code);
    if (!match) return;

    const attributes = parseElementAttributes(match[1]!);
    const content = match[2];

    if (attributes['src']) throw Error('src attribute is not supported on style tags.');
    if (!content && match[0].endsWith('/>')) throw Error('Empty style tags must be self-closing.');

    const contentStartIndex = match.index + 6 + (match[1]?.length ?? 0);
    const contentEndIndex = contentStartIndex + (content?.length ?? 0) + 1;

    return { attributes, content, contentStartIndex, contentEndIndex };
}
