import type { ComponentSchema } from '@svelte-daisyui/shared';
import type { PreprocessorOptions } from '../interfaces';
import { getAttributes } from './get-attributes.utility';

export function parseComponents<T>(
    // importNameAliases:
    componentName: string,
    code: string,
    schema: ComponentSchema<T>,
    options: PreprocessorOptions,
) {
    const componentRegex = new RegExp(`<${componentName}(\\s[^]*?)?><\\/${componentName}>`, 'g');
    const matchAll = code.matchAll(componentRegex);

    // { color: Set['primary', 'secondary'], screen: { sm: { color: Set['primary'] } } }

    const parsedComponents = Array.from(matchAll).forEach((match) => {
        const componentAttrs = getAttributes(match[1]!);
        const { error, value: transformedComponent } = schema.transform(componentAttrs);
        if (error) throw error;

        Object.entries(transformedComponent!).forEach((entry) => {
            const [propName, propValue] = entry as [keyof T, T[keyof T]];
            uniqueComponentProps[propName] = uniqueComponentProps[propName] ?? new Set();
            uniqueComponentProps[propName].add(propValue);
        });
    });

    return parsedComponents;
}
