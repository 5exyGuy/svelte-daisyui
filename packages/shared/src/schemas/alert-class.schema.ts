import { PropTypes } from '../enums';
import type { AlertClassProps, AlertProps, ComponentSchema } from '../interfaces';
import { createSchema } from './create-schema';
import joi from 'joi';

const name: ComponentSchema<AlertProps>['name'] = 'Alert';
const propData: ComponentSchema<AlertClassProps>['propData'] = {
    color: {
        type: PropTypes.String,
        validValues: ['base', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
        default: 'base',
    },
};
const objectSchema: ComponentSchema<AlertProps>['objectSchema'] = joi.object<AlertProps>({
    color: joi.string().valid(...propData.color.validValues),
});

export const AlertClassSchema = createSchema<AlertClassProps>({
    name,
    propData,
    objectSchema,
});
