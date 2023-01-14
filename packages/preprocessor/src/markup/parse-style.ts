import { STYLE_REGEX } from '../constants';
import type { StyleParseResult } from '../interfaces';
import { parseElementAttributes } from './parse-element-attributes';

export function parseStyle(code: string) {
    const style = {} as StyleParseResult;

    const match = STYLE_REGEX.exec(code);

    style.attributes = match ? parseElementAttributes(match[1]) : {};
    style.content = match ? match[2] : undefined;

    if (style.attributes?.['src']) throw Error('src attribute is not supported on style tags.');
    if (!style.content && match[0].endsWith('/>')) throw Error('Empty style tags must be self-closing.');

    style.contentStartIndex = match.index + 6 + (match[1]?.length ?? 0);
    style.contentEndIndex = style.contentStartIndex + (style.content?.length ?? 0) + 1;

    return style;
}
