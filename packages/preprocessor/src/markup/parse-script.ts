import { SCRIPT_COMMENT_REGEX, SCRIPT_REGEX } from '../constants';
import type { ScriptParseResult } from '../interfaces';
import { parseElementAttributes } from './parse-element-attributes';

export function parseScript(code: string) {
    const script = {} as ScriptParseResult;

    let match: RegExpExecArray | null;
    while ((match = SCRIPT_REGEX.exec(code))) {
        const attributes = parseElementAttributes(match[1]!);
        const content = match[2]!.replace(SCRIPT_COMMENT_REGEX, '$1').trim();
        if (attributes && attributes['context'] === 'module') {
            script.module = { attributes, content };
            continue;
        }
        script.instance = { attributes, content };
    }

    return script;
}
