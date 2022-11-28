import { PropTypes } from '../enums';
import type { ComponentSchema } from '../interfaces';

export function createSchema<Props>(schema: Omit<ComponentSchema<Props>, 'validate' | 'transform'>) {
    return {
        ...schema,
        validate: validateSchema,
        transform: transformSchema,
    } as ComponentSchema<Props>;
}

function validateSchema<Props>(this: ComponentSchema<Props>, value: any) {
    return this.objectSchema.validate(value);
}

function transformSchema<Props>(this: ComponentSchema<Props>, value: any) {
    if (typeof value !== 'object') return;

    const transformed = {} as Props;

    Object.entries(this.propData).forEach((entry) => {
        const [propName, type] = entry as [keyof Props, PropTypes];
        const propValue = value[propName];
        if (!propValue) {
            transformed[propName] = this.propData[propName]!.default;
            return;
        }

        switch (type) {
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
    });

    return this.validate(transformed);
}
