import { PropTypes } from '../enums';
import type { ComponentSchema } from '../interfaces';

export function transformSchema<Props>(componentSchema: ComponentSchema<Props>, value: any) {
    if (typeof value !== 'object') throw new Error(`Expected an object, got ${typeof value}`);

    return (Object.keys(componentSchema.data) as Array<keyof Props>).reduce((transformed, propName) => {
        const propData = componentSchema.data[propName]!;

        const propValue = value[propName];
        if (!propValue) {
            transformed[propName] = propData.default;
            return transformed;
        }

        if (propData.responsive) {
            try {
                const sanitizedPropValue = propValue
                    .replace(/(['"])?([a-z0-9A-Z_]+)(['"])?:/g, '"$2":')
                    .replace(/'/g, '"');
                transformed[propName] = JSON.parse(sanitizedPropValue) as Props[keyof Props];
            } catch (e) {
                transformed[propName] = propValue as Props[keyof Props];
            }
            return transformed;
        }

        switch (propData.type) {
            case PropTypes.Boolean:
                transformed[propName] = Boolean(propValue) as Props[keyof Props];
                break;
            case PropTypes.Number:
                transformed[propName] = Number(propValue) as Props[keyof Props];
                break;
            case PropTypes.Object:
                transformed[propName] = JSON.parse(propValue) as Props[keyof Props];
                break;
            case PropTypes.String:
                transformed[propName] = String(propValue) as Props[keyof Props];
                break;
        }

        return transformed;
    }, {} as Props);
}
