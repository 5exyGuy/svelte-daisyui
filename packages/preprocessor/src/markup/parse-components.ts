import type { ComponentProps, ComponentSchema, ResponsiveProperty } from '@svelte-daisyui/shared';
import type { UniqueComponentProps } from '../types';
import { parseElementAttributes } from './parse-element-attributes';

export function parseComponents<Props extends ComponentProps>(
    importNameAliases: string[],
    code: string,
    schema: ComponentSchema<Props>,
) {
    const componentRegex = new RegExp(`<${importNameAliases.join('|')}(\s+[^/>]*)?\/?>`, 'g');
    const matchAll = code.matchAll(componentRegex);

    const uniqueComponentProps = {} as UniqueComponentProps<Props>;

    Array.from(matchAll).forEach((match) => {
        const componentAttributes = parseElementAttributes(match[1]!);
        const transformedComponent = schema.transform(componentAttributes);
        const { error, value } = schema.validate(transformedComponent!);
        if (error) throw error;

        (Object.keys(value!) as Array<keyof Props>).forEach((propName) => {
            const propValue = value[propName];

            if (schema.propData[propName]!.responsive && typeof propValue === 'object') {
                uniqueComponentProps[propName] as ResponsiveProperty<Set<Props[keyof Props]>>;
            }
        });
    });

    return uniqueComponentProps;
}
