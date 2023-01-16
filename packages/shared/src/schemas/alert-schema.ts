import { PropTypes } from '../enums';
import type { AlertProps, ComponentSchema } from '../interfaces';

export const AlertSchema = {
    name: 'Alert',
    data: {
        color: {
            responsive: true,
            type: PropTypes.String,
            validValues: ['base', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
            default: 'base',
        },
    },
} as ComponentSchema<AlertProps>;
