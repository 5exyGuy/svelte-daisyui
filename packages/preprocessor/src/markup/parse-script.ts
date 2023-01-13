import { SCRIPT_COMMENT_REGEX, SCRIPT_REGEX } from '../constants';
import { parseElementAttributes } from './parse-element-attributes';

export function parseScript(code: string) {
    const script = {} as {
        instance?: { attributes: Record<string, string | boolean>; content: string };
        module?: { attributes: Record<string, string | boolean>; content: string };
    };

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
