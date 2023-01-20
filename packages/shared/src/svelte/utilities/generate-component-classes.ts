import { PropTypes } from '../../enums';
import type { ComponentSchema } from '../../interfaces';
import type { ResponsiveProperty } from '../../types';
import { convertToEntries } from '../../utilities';

export function generateComponentClasses<ComponentProps, ClassPropNames extends keyof ComponentProps>(
    componentSchema: ComponentSchema<{
        [K in keyof ComponentProps]: Exclude<ComponentProps[K], ResponsiveProperty<ComponentProps[K]>>;
    }>,
    values: Partial<Pick<ComponentProps, ClassPropNames>>,
) {
    const classList = [] as Array<string>;

    convertToEntries(values).forEach(([propName, propValue]) => {
        const propData = componentSchema.data[propName];
        if (!propData) return;

        if (typeof propValue !== 'object') {
            if (!propData.validate(propValue) && propData.default)
                throw new Error(`Invalid value for ${propName as string}`);
            if (propData.validate(propValue)) {
                propValue = propData.transform ? propData.transform(propValue) : propValue;
                classList.push(`${componentSchema.name.toLowerCase()}-${propValue}`);
            }
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
