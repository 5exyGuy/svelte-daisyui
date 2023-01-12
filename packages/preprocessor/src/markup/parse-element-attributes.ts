import { ATTRIBUTE_REGEX } from '../constants';

export function parseElementAttributes(value?: string) {
    if (!value) return;

    const attributes = {} as Record<string, string | boolean>;

    let match: RegExpExecArray | null;
    while ((match = ATTRIBUTE_REGEX.exec(value))) {
        let key = match[1]!;
        let value = match[2] ?? true;
        attributes[key] = value;
    }

    return attributes;
}
