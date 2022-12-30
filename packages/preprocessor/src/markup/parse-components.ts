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

        (Object.entries(value!) as Array<[keyof Props, NonNullable<Props[keyof Props]>]>).forEach(
            ([propName, propValue]) => {
                if (!schema.propData[propName]!.responsive) {
                    (uniqueComponentProps[propName] as Set<Props[keyof Props]>) ?? new Set();
                    (uniqueComponentProps[propName] as Set<Props[keyof Props]>).add(propValue);
                    return;
                }

                if (typeof propValue !== 'object') {
                    (uniqueComponentProps[propName] as ResponsiveProperty<Set<Props[keyof Props]>>).default ??
                        new Set();
                    (uniqueComponentProps[propName] as ResponsiveProperty<Set<Props[keyof Props]>>).default!.add(
                        propValue,
                    );
                    return;
                }

                (
                    Object.entries(propValue) as Array<
                        [
                            keyof ResponsiveProperty<Props[keyof Props]>,
                            NonNullable<
                                ResponsiveProperty<Props[keyof Props]>[keyof ResponsiveProperty<Props[keyof Props]>]
                            >,
                        ]
                    >
                ).forEach(([breakpointName, breakpointValue]) => {
                    (uniqueComponentProps[propName] as ResponsiveProperty<Set<Props[keyof Props]>>)[breakpointName] ??
                        new Set();
                    (uniqueComponentProps[propName] as ResponsiveProperty<Set<Props[keyof Props]>>)[
                        breakpointName
                    ]!.add(breakpointValue);
                });
            },
        );
    });

    return uniqueComponentProps;
}
