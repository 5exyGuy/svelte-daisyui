import type { ComponentSchema } from '../../interfaces';
import { convertToEntries } from '../../utilities';

export function generateComponentClasses<Props>(componentSchema: ComponentSchema<Props>, values: Partial<Props>) {
    const classList = [] as Array<string>;

    convertToEntries(values).forEach(([propName, propValue]) => {
        if (typeof propValue !== 'object') {
            if (!componentSchema.data[propName]!.validation.validator(propValue))
                throw new Error(`Invalid value for ${propName as string}`);
            classList.push(`${componentSchema.name.toLowerCase()}-${propValue}`);
            return;
        }

        convertToEntries(propValue).forEach(([breakpointName, breakpointValue]) => {
            if (!componentSchema.data[propName]!.validation.validator(breakpointValue as any))
                throw new Error(`Invalid value for ${propName as string}`);

            classList.push(
                `${
                    breakpointName !== 'default' ? (breakpointName as string) + ':' : ''
                }${componentSchema.name.toLowerCase()}-${breakpointValue}`,
            );
        });
    });

    return classList.join(' ');
}
