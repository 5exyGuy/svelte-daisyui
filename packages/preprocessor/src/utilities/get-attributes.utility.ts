export function getAttributes(value: string) {
    return value
        .split(/s+/)
        .filter(Boolean)
        .reduce((acc, attr) => {
            const [name, value] = attr.split('=') as [string, string?];
            let attrValue = value ? value.replace(/['"]/g, '') : true;
            if (typeof attrValue === 'string' && (attrValue === 'true' || attrValue === 'false'))
                attrValue = Boolean(attrValue);
            acc[name] = attrValue;
            return acc;
        }, {} as Record<string, string | boolean>);
}
