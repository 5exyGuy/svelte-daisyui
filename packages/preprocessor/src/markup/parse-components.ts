import type { ComponentSchema, ComponentsProps } from '@svelte-daisyui/shared';
import type { PreprocessorOptions } from '../interfaces';
import type { UniqueComponentProps } from '../types';
import { parseElementAttributes } from './parse-element-attributes';

export function parseComponents<Props extends ComponentsProps>(
    importNameAliases: string[],
    code: string,
    schema: ComponentSchema<Props>,
) {
    const componentRegex = new RegExp(`<${importNameAliases.join('|')}(\s+[^/>]*)?\/?>`, 'g');
    const matchAll = code.matchAll(componentRegex);

    // { color: Set['primary', 'secondary'], screen: { sm: { color: Set['primary'] } } }

    const uniqueComponentProps = {} as UniqueComponentProps<Props>;

    const parsedComponents = Array.from(matchAll).forEach((match) => {
        const componentAttrs = parseElementAttributes(match[1]!);
        const { error, value: transformedComponent } = schema.transform(componentAttrs);
        if (error) throw error;

        Object.entries(transformedComponent!).forEach((entry) => {
            const [propName, propValue] = entry as [keyof Props, Props[keyof Props]];
            uniqueComponentProps[propName] = uniqueComponentProps[propName] ?? new Set();
            (uniqueComponentProps[propName] as Set<Props[keyof Props]>).add(propValue);
        });
    });

    return uniqueComponentProps;
}
