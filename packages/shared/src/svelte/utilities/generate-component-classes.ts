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

        if (typeof propValue === 'object' && propData.type === PropTypes.Object)
            throw new Error('Object type properties are not supported yet.');

        if (typeof propValue === 'object' && propData.responsive) {
            convertToEntries(propValue).forEach(([breakpointName, breakpointValue]) => {
                if (!propData.validate(breakpointValue as Props[ClassPropNames]))
                    throw new Error(`Invalid value for ${propName as string}`);
                if (propData.type === PropTypes.Boolean && breakpointValue === false) return;
                breakpointValue = propData.transform(breakpointValue as Props[ClassPropNames]);
                classList.push(
                    `${
                        breakpointName !== 'default' ? (breakpointName as string) + ':' : ''
                    }${componentSchema.name.toLowerCase()}-${breakpointValue}`,
                );
            });
        }

        if (typeof propValue !== 'object') {
            if (propValue === undefined && propData.default !== undefined) propValue = propData.default;
            else if (propValue === undefined) return;
            if (!propData.validate(propValue as Props[ClassPropNames]))
                throw new Error(
                    `Error occurred while generating classes for ${propName as string} property of ${
                        componentSchema.name
                    } component.`,
                );
            if (propData.type === PropTypes.Boolean && propValue === false) return;

            console.log(propName, propValue);

            propValue = propData.transform(propValue as Props[ClassPropNames]);
            classList.push(`${componentSchema.name.toLowerCase()}-${propValue}`);
            return;
        }
    });

    console.log(classList);

    return classList.join(' ');
}
