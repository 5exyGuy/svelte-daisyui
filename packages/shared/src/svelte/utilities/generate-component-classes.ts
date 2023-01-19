import { PropTypes } from '../../enums';
import type { ComponentSchema } from '../../interfaces';
import { convertToEntries } from '../../utilities';

export function generateComponentClasses<Props>(componentSchema: ComponentSchema<Props>, values: Partial<Props>) {
    const classList = [] as Array<string>;

    convertToEntries(values).forEach(([propName, propValue]) => {
        const propData = componentSchema.data[propName];
        if (!propData) return;

        if (typeof propValue !== 'object') {
            if (!propData.validate(propValue) && propData.default)
                throw new Error(`Invalid value for ${propName as string}`);
            propValue = propData.transform ? propData.transform(propValue) : propValue;
            classList.push(`${componentSchema.name.toLowerCase()}-${propValue}`);
            return;
        }

        convertToEntries(propValue).forEach(([breakpointName, breakpointValue]) => {
            if (!propData.validate(breakpointValue as any)) throw new Error(`Invalid value for ${propName as string}`);
            if (propData.type === PropTypes.Boolean && breakpointValue === false) return;
            breakpointValue = propData.transform ? propData.transform(breakpointValue as any) : breakpointValue;
            classList.push(
                `${
                    breakpointName !== 'default' ? (breakpointName as string) + ':' : ''
                }${componentSchema.name.toLowerCase()}-${breakpointValue}`,
            );
        });
    });

    return classList.join(' ');
}
