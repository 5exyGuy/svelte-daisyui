import type { ComponentSchema } from '../../interfaces';
import { convertToEntries } from '../../utilities';

export function generateComponentClasses<Props>(schema: ComponentSchema<Props>, values: Partial<Props>) {
    const classList = [] as Array<string>;

    convertToEntries(values).forEach(([propName, propValue]) => {
        if (typeof propValue !== 'object') {
            const { error, value } = schema.validationMap[propName]!.validate(propValue);
            if (error) throw error;
            classList.push(`${schema.name.toLowerCase()}-${value}`);
            return;
        }

        convertToEntries(propValue).forEach(([breakpointName, breakpointValue]) => {
            const { error, value } = schema.validationMap[propName]!.validate(breakpointValue);
            if (error) throw error;
            classList.push(
                `${
                    breakpointName !== 'default' ? (breakpointName as string) + ':' : ''
                }${schema.name.toLowerCase()}-${value}`,
            );
        });
    });

    return classList.join(' ');
}
