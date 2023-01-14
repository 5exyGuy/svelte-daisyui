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

export const AlertSchema = {
    create() {
        return createSchema<AlertProps>({
            name: 'Alert',
            propData,
            validationMap: {
                color: joi
                    .string()
                    .valid(...propData.color!.validValues)
                    .optional(),
            },
        });
    },
} as const;
