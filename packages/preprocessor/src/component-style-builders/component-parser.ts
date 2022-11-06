export function parseComponents<T>(componentName: string, code: string) {
    const componentRegex = new RegExp(`<${componentName}(\\s[^]*?)?><\\/${componentName}>`, 'g');
    const matchAll = code.matchAll(componentRegex);

    const componentAttributes = Array.from(matchAll).map((match) => {
        const attributes = (match[1] as string)
            .split(/s+/)
            .filter(Boolean)
            .reduce((acc, attr) => {
                const [name, value] = attr.split('=') as [string, string];
                acc[name] = value.replaceAll(/['"{}]/g, '');
                return acc;
            }, {} as T);
        return { ...attributes };
    });

    return componentAttributes;
}
