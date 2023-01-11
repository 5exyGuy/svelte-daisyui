import { SCRIPT_COMMENT_REGEX, SCRIPT_REGEX } from '../constants';
import { parseElementAttributes } from './parse-element-attributes';

export function parseScript(code: string) {
    const match = SCRIPT_REGEX.exec(code);
    if (!match) return;

    const attributes = parseElementAttributes(match[1]);
    const content = match[2]?.replace(SCRIPT_COMMENT_REGEX, '$1').trim();

    return { attributes, content };
}
