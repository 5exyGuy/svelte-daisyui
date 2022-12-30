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
            const propValue = value[propName]!;
            const propData = schema.propData[propName]!;

            if (!propData.responsive) {
                (uniqueComponentProps[propName] as Set<Props[keyof Props]>) ?? new Set();
                (uniqueComponentProps[propName] as Set<Props[keyof Props]>).add(propValue);
                return;
            }

            if (typeof propValue === 'object') {
                (Object.keys(propValue) as Array<keyof ResponsiveProperty<typeof propValue>>).forEach((breakpoint) => {
                    (uniqueComponentProps[propName] as ResponsiveProperty<Set<typeof propValue>>)[breakpoint] ??
                        new Set();
                    (uniqueComponentProps[propName] as ResponsiveProperty<Set<typeof propValue>>)[breakpoint]!.add(
                        (propValue as ResponsiveProperty<typeof propValue>)[breakpoint],
                    );
                });
                return;
            }

            (uniqueComponentProps[propName] as ResponsiveProperty<Set<Props[keyof Props]>>).default ?? new Set();
            (uniqueComponentProps[propName] as ResponsiveProperty<Set<Props[keyof Props]>>).default!.add(propValue);
        });
    });

    return uniqueComponentProps;
}
