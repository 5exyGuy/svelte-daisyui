import { PropTypes } from '../enums';
import type { AlertProps, ComponentSchema } from '../interfaces';
import { createSchema } from './create-schema';
import joi from 'joi';

const propData = {
    color: {
        responsive: true,
        type: PropTypes.String,
        validValues: ['base', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
        default: 'base',
    },
} as ComponentSchema<AlertProps>['propData'];

export const AlertSchema = createSchema<AlertProps>({
    name: 'Alert',
    hasBreakpoint: true,
    propData,
    map: {
        default: joi.object<AlertProps>({
            color: joi
                .string()
                .valid(...propData.color!.validValues)
                .optional()
                .default(propData.color!.default),
        }),
        breakpoint: joi.object<AlertProps>({
            color: joi
                .string()
                .valid(...propData.color!.validValues)
                .optional(),
        }),
    },
});
