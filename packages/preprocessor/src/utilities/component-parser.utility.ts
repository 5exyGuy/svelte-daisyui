import type { ComponentSchema, StringKeyOf } from '@svelte-daisyui/shared';
import type { PreprocessorOptions } from '../interfaces';

type UniqueComponentProps<T> = {
    [PropName in keyof T]: Set<T[PropName]>;
} & {
    screen?: { [ScreenSize in keyof typeof options['screenSizes']]: { [PropName in keyof T]: Set<T[PropName]> } };
};

export function parseComponents<T>(
    componentName: string,
    code: string,
    schema: ComponentSchema<T>,
    options: Required<PreprocessorOptions>,
) {
    const componentRegex = new RegExp(`<${componentName}(\\s[^]*?)?><\\/${componentName}>`, 'g');
    const matchAll = code.matchAll(componentRegex);

    // { color: Set['primary', 'secondary'], screen: { sm: { color: Set['primary'] } } }

    const parsedComponents = Array.from(matchAll).reduce<UniqueComponentProps<T>>((uniqueComponentProps, match) => {
        const parsedComponent = (match[1] as string)
            .split(/s+/)
            .filter(Boolean)
            .reduce((acc, attr) => {
                const [name, value] = attr.split('=') as [keyof T, string];
                acc[name] = value.replaceAll(/['"{}]/g, '') as T[keyof T];
                return acc;
            }, {} as T);
        const { error, value: transformedComponent } = schema.transform(parsedComponent);
        if (error) throw error;

        Object.entries(transformedComponent!).forEach((entry) => {
            const [propName, propValue] = entry as [keyof T, T[keyof T]];
            uniqueComponentProps[propName] = uniqueComponentProps[propName] ?? new Set();
            uniqueComponentProps[propName].add(propValue);
        });
    }, {});

    return parsedComponents;
}
