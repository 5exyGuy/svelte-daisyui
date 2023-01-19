import {
    convertToEntries,
    transformSchema,
    type ComponentSchema,
    type ResponsiveProperty,
} from '@svelte-daisyui/shared';
import { walk } from 'svelte/compiler';
import type { Attribute, Element } from 'svelte/types/compiler/interfaces';
import type { HtmlParseResult } from '../interfaces';
import type { UniqueComponentProps } from '../types';

export function parseComponents<Props, ResponsivePropNames extends keyof Props>(
    componentSchema: ComponentSchema<Props>,
    aliases: Set<string>,
    html: HtmlParseResult,
) {
    const uniqueComponentProps = {} as UniqueComponentProps<Props, ResponsivePropNames>;

    walk(html.template, {
        enter: (node) => {
            if (node.type !== 'InlineComponent') return;
            if (!aliases.has((node as Element).name)) return;

            const componentAttributes = (node as Element).attributes.reduce((props, attribute) => {
                if (attribute.type !== 'Attribute') return props;
                const { name, value } = attribute as Attribute;
                if (!componentSchema.data[name as keyof Props]) return props;
                if (typeof value === 'boolean') props[name as keyof Props] = value;
                else if (
                    Array.isArray(value) &&
                    value.length === 1 &&
                    (value[0].type === 'Text' || value[0].type === 'MustacheTag')
                )
                    props[name as keyof Props] = html.content.substring(value[0].start + 1, value[0].end - 1);
                else throw new Error(`Invalid attribute value for ${name}`);
                return props;
            }, {} as Record<keyof Props, string>);
            const transformedComponentAttributes = transformSchema(componentSchema, componentAttributes);

            convertToEntries(transformedComponentAttributes).forEach(([propName, propValue]) => {
                if (!componentSchema.data[propName]!.responsive) {
                    (uniqueComponentProps[propName] as Set<Props[keyof Props]>) ??= new Set();
                    (uniqueComponentProps[propName] as Set<Props[keyof Props]>).add(propValue);
                    return;
                }

                if (typeof propValue !== 'object') {
                    (uniqueComponentProps[propName] as ResponsiveProperty<Set<Props[keyof Props]>>) ??= {
                        default: new Set(),
                    };
                    (uniqueComponentProps[propName] as ResponsiveProperty<Set<Props[keyof Props]>>).default ??=
                        new Set();
                    (uniqueComponentProps[propName] as ResponsiveProperty<Set<Props[keyof Props]>>).default!.add(
                        propValue,
                    );
                    return;
                }
                convertToEntries<ResponsiveProperty<Props[keyof Props]>>(propValue as any).forEach(
                    ([breakpointName, breakpointValue]) => {
                        (uniqueComponentProps[propName] as ResponsiveProperty<Set<Props[keyof Props]>>) ??= {};
                        (uniqueComponentProps[propName] as ResponsiveProperty<Set<Props[keyof Props]>>)[
                            breakpointName
                        ] ??= new Set();
                        (uniqueComponentProps[propName] as ResponsiveProperty<Set<Props[keyof Props]>>)[
                            breakpointName
                        ]!.add(breakpointValue!);
                    },
                );
            });
        },
    });

    return uniqueComponentProps;
}
