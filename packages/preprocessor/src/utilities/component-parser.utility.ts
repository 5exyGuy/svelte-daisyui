import { AlertClassSchema } from '@svelte-daisyui/shared';

export function parseComponents<T>(componentName: string, code: string) {
    const componentRegex = new RegExp(`<${componentName}(\\s[^]*?)?><\\/${componentName}>`, 'g');
    const matchAll = code.matchAll(componentRegex);

    const parsedComponents = Array.from(matchAll).map((match) => {
        const parsedComponent = (match[1] as string)
            .split(/s+/)
            .filter(Boolean)
            .reduce((acc, attr) => {
                const [name, value] = attr.split('=') as [keyof T, string];
                acc[name] = value.replaceAll(/['"{}]/g, '') as T[keyof T];
                return acc;
            }, {} as T);
        const transformedComponent = AlertClassSchema.transform(parsedComponent);
        if (transformedComponent.error) throw transformedComponent.error;
        return transformedComponent.value;
    });

    return parsedComponents;
}
