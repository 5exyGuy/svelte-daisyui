export function getAttributes(value: string) {
    return value
        .split(/s+/)
        .filter(Boolean)
        .reduce((acc, attr) => {
            const [name, value] = attr.split('=') as [string, string];
            acc[name] = value.replace(/['"]/g, '');
            return acc;
        }, {} as Record<string, string>);
}
