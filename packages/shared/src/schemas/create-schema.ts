import type { ComponentSchema } from '../interfaces';

export function createSchema<Props>(schema: Omit<ComponentSchema<Props>, 'validate' | 'transform'>) {
    return {
        ...schema,
        validate: (object: object) => schema.schema.validate(object).error === undefined,
        transform: (object: object) => schema.schema.validate(object).value,
    } as ComponentSchema<Props>;
}
