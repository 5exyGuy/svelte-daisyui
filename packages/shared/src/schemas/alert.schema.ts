import { PropTypes } from '../enums';
import type { AlertProps, ComponentSchema } from '../interfaces';
import { createSchema } from './create-schema';
import joi from 'joi';

const propData = {
    color: {
        type: PropTypes.String,
        validValues: ['base', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
        default: 'base',
    },
} as ComponentSchema<AlertProps>['propData'];

export const AlertSchema = createSchema<AlertProps>({
    name: 'Alert',
    hasScreen: true,
    propData,
    objectSchema: joi.object<AlertProps>({
        color: joi.string().valid(...propData.color!.validValues),
    }),
});
