import joi from 'joi';
import { PropTypes } from '../enums';
import type { AlertClassProps, AlertProps, ComponentSchema } from '../interfaces';
import { createSchema } from './create-schema';

const name: ComponentSchema<AlertProps>['name'] = 'Alert';
const propValues: ComponentSchema<AlertClassProps>['propValues'] = {
    color: {
        values: ['base', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
        default: 'base',
    },
};
const propTypes: ComponentSchema<AlertClassProps>['propTypes'] = {
    color: PropTypes.String,
};
const objectSchema: ComponentSchema<AlertProps>['objectSchema'] = joi.object<AlertProps>({
    color: joi.string().valid(...propValues.color.values),
});

export const AlertClassSchema = createSchema<AlertClassProps>({
    name,
    propValues,
    propTypes,
    objectSchema,
});
