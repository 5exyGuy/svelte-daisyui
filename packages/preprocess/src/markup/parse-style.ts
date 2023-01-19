import { STYLE_REGEX } from '../constants';
import type { StyleParseResult } from '../interfaces';
import { throwConditionalError } from '../utilities';
import { parseElementAttributes } from './parse-element-attributes';

export function parseStyle(code: string) {
    const style = {} as StyleParseResult;

    const match = STYLE_REGEX.exec(code);

    style.attributes = match ? parseElementAttributes(match[1]) : {};
    style.content = match ? match[2] : undefined;

    throwConditionalError(!!style.attributes['src'], 'src attribute is not supported on style tags.');
    throwConditionalError(!!match && match[0].endsWith('/>'), 'Empty style tags must be self-closing.');

    style.contentStartIndex = match ? match.index + 6 + (match[1]?.length ?? 0) : -1;
    style.contentEndIndex = match ? style.contentStartIndex + (style.content?.length ?? 0) + 1 : -1;

    return style;
}
