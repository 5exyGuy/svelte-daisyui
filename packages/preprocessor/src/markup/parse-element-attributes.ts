import { ATTRIBUTE_REGEX } from '../constants';

export function parseElementAttributes(value?: string) {
    const attributes = {} as Record<string, string | boolean>;
    if (!value) return attributes;

    let match: RegExpExecArray | null;
    while ((match = ATTRIBUTE_REGEX.exec(value))) {
        const [key, value] = match as [string, string?];
        attributes[key] = value ?? true;
    }

    return attributes;
}
