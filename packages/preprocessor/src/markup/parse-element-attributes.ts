export function parseElementAttributes(value?: string) {
    if (!value) return;
    // parse html tag element attributes when attribute values can have empty spaces

    return value
        .split(/s+/)
        .filter(Boolean)
        .reduce((acc, attr) => {
            const [name, value] = attr.split('=').map((value) => value.trim()) as [string, string?];
            if (!value) {
                acc[name] = true;
                return acc;
            }
            if (
                typeof value === 'string' &&
                ((value.startsWith('{') && value.endsWith('}')) ||
                    (value.startsWith('"') && value.endsWith('"')) ||
                    (value.startsWith("'") && value.endsWith("'")))
            ) {
                const attrValue = value.slice(1, -1);
                acc[name] = attrValue === 'true' ? true : attrValue === 'false' ? false : attrValue;
            }
            return acc;
        }, {} as Record<string, string | boolean>);
}
