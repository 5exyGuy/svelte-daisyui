import { PropTypes } from '../../enums';
import type { ComponentSchema } from '../../interfaces';
import type { ComponentProps } from '../../types';
import { convertToEntries } from '../../utilities';

export function generateComponentClasses<
    Props,
    ClassPropNames extends keyof Props,
    ResposivePropNames extends ClassPropNames,
>(
    componentSchema: ComponentSchema<Props>,
    values: Partial<Pick<ComponentProps<Props, ResposivePropNames>, ClassPropNames>>,
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
            if (!propData.validate(breakpointValue as Props[ClassPropNames]))
                throw new Error(`Invalid value for ${propName as string}`);
            if (propData.type === PropTypes.Boolean && breakpointValue === false) return;
            breakpointValue = propData.transform
                ? propData.transform(breakpointValue as Props[ClassPropNames])
                : breakpointValue;
            classList.push(
                `${
                    breakpointName !== 'default' ? (breakpointName as string) + ':' : ''
                }${componentSchema.name.toLowerCase()}-${breakpointValue}`,
            );
        });
    });

    return classList.join(' ');
}
