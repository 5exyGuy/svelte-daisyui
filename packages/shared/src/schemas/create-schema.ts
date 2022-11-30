import { PropTypes } from '../enums';
import type { ComponentSchema, ComponentsProps } from '../interfaces';
import joi from 'joi';
import type { ScreenSizeNames } from '../types';

export function createSchema<Props extends ComponentsProps>(
    schema: Omit<ComponentSchema<Props>, 'validate' | 'transform'>,
) {
    function validateValue(value: any) {
        const valueSchema = joi.object();
        const { error, value: validatedValue } = valueSchema.validate(value);
        if (error) throw error;
        return validatedValue;
    }

    function validateScreenSizeNames<CustomScreenSizeNames extends string = string>(
        screenSizeNames: Array<ScreenSizeNames | CustomScreenSizeNames>,
    ) {
        const screenSizeNamesSchema = joi.array<typeof screenSizeNames>().items(joi.string()).min(1).unique();
        const { error, value } = screenSizeNamesSchema.validate(screenSizeNames);
        if (error) throw error;
        return value;
    }

    function transformValue(value: any) {
        return Object.entries(schema.propData).reduce<Props>((transformed, entry) => {
            const [propName, type] = entry as [keyof Props, PropTypes];
            const propValue = value[propName];
            if (!propValue) {
                transformed[propName] = schema.propData[propName]!.default;
                return transformed;
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

            return transformed;
        }, {} as Props);
    }

    const objectSchemaWithDefaults = Object.keys(schema.objectSchema.describe()).reduce((objectSchema, key) => {
        objectSchema.append({
            [key]: schema.objectSchema.extract(key).default(schema.propData[key as keyof Props]!.default!),
        });
        return objectSchema;
    }, joi.object<Props>());

    return {
        ...schema,
        // Schema validation
        validate: function <CustomScreenSizeNames extends string = string>(
            value: any,
            screenSizes: Array<ScreenSizeNames | CustomScreenSizeNames>,
        ) {
            value = validateValue(value);
            screenSizes = validateScreenSizeNames(screenSizes);

            const schema = this.hasScreen
                ? objectSchemaWithDefaults.append({
                      screen: screenSizes.reduce((acc, screenSize) => {
                          acc[screenSize] = this.objectSchema.optional();
                          return acc;
                      }, {} as Record<typeof screenSizes[number], typeof this.objectSchema>),
                  })
                : objectSchemaWithDefaults;

            return schema.validate(value);
        },
        // Schema transformation
        transform: function <CustomScreenSizeNames extends string = string>(
            value: any,
            screenSizes: Array<ScreenSizeNames | CustomScreenSizeNames>,
        ) {
            value = validateValue(value);
            screenSizes = validateScreenSizeNames(screenSizes);

            // Transform the given value into a schema object
            const transformed = transformValue(value);

            if (this.hasScreen && value.screen) {
                const componentScreen = JSON.parse(value.screen);

                transformed.screen = {};
                Object.keys(screenSizes).forEach((screenSize) => {
                    const screenValue = componentScreen[screenSize];
                    if (!screenValue) return;
                    transformed.screen![screenSize] = transformValue(screenValue);
                });
            }

            return this.validate(transformed, screenSizes);
        },
    } as ComponentSchema<Props>;
}
