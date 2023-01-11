import { convertToEntries, type ComponentSchema, type ResponsiveProperty } from '@svelte-daisyui/shared';
import type { UniqueComponentProps } from '../types';
import { parseElementAttributes } from './parse-element-attributes';

export function parseComponents<Props, ResponsivePropNames extends keyof Props>(
    schema: ComponentSchema<Props>,
    aliases: Array<string>,
    code: string,
) {
    const componentRegex = new RegExp(`<${aliases.join('|')}(\\s+[^/>]*)?\\/?>`, 'g');
    const matchAll = code.matchAll(componentRegex);

    const uniqueComponentProps = {} as UniqueComponentProps<Props, ResponsivePropNames>;

    Array.from(matchAll).forEach((match) => {
        const componentAttributes = parseElementAttributes(match[1]);
        console.log(componentAttributes);
        const transformedComponent = schema.transform(componentAttributes);

        const { error, value } = schema.validate(transformedComponent!);
        if (error) throw error;

        convertToEntries(value).forEach(([propName, propValue]) => {
            if (!schema.propData[propName]!.responsive) {
                (uniqueComponentProps[propName] as Set<Props[keyof Props]>) ??= new Set();
                (uniqueComponentProps[propName] as Set<Props[keyof Props]>).add(propValue);
                return;
            }

            if (typeof propValue !== 'object') {
                (uniqueComponentProps[propName] as ResponsiveProperty<Set<Props[keyof Props]>>) ??= {
                    default: new Set(),
                };
                (uniqueComponentProps[propName] as ResponsiveProperty<Set<Props[keyof Props]>>).default ??= new Set();
                (uniqueComponentProps[propName] as ResponsiveProperty<Set<Props[keyof Props]>>).default!.add(propValue);
                return;
            }
            convertToEntries<ResponsiveProperty<Props[keyof Props]>>(propValue as any).forEach(
                ([breakpointName, breakpointValue]) => {
                    (uniqueComponentProps[propName] as ResponsiveProperty<Set<Props[keyof Props]>>) ??= {};
                    (uniqueComponentProps[propName] as ResponsiveProperty<Set<Props[keyof Props]>>)[breakpointName] ??=
                        new Set();
                    (uniqueComponentProps[propName] as ResponsiveProperty<Set<Props[keyof Props]>>)[
                        breakpointName
                    ]!.add(breakpointValue!);
                },
            );
        });
    });

    return uniqueComponentProps;
}
