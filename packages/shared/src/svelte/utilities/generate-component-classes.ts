import type { ComponentSchema } from '../../interfaces';
import type { ComponentProps, ResponsiveProperty } from '../../types';

export function generateComponentClasses<Props extends ComponentProps>(
    schema: ComponentSchema<Props>,
    values: Partial<Props>,
) {
    const classList = [] as Array<string>;

    (Object.entries(values) as Array<[keyof Props, NonNullable<Props[keyof Props]>]>).forEach(
        ([propName, propValue]) => {
            if (typeof propValue !== 'object') {
                const { error, value } = schema.validationMap[propName]!.validate(propValue);
                if (error) throw error;
                classList.push(`${schema.name.toLowerCase()}-${value}`);
                return;
            }

            (
                Object.entries(propValue) as Array<
                    [
                        keyof ResponsiveProperty<Props[keyof Props]>,
                        ResponsiveProperty<Props[keyof Props]>[keyof ResponsiveProperty<Props[keyof Props]>],
                    ]
                >
            ).forEach(([breakpointName, breakpointValue]) => {
                const { error, value } = schema.validationMap[propName]!.validate(breakpointValue);
                if (error) throw error;
                classList.push(`${breakpointName}:${schema.name.toLowerCase()}-${value}`);
            });
        },
    );

    return classList.join(' ');
}
