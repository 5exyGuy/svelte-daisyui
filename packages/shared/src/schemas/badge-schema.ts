import { PropTypes, Size } from '../enums';
import type { BadgeProps, ComponentSchema } from '../interfaces';

export const BadgeSchema = {
    name: 'Badge',
    data: {
        color: {
            responsive: true,
            type: PropTypes.String,
            validate: (value) =>
                ['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error', 'neutral', 'ghost'].includes(
                    value!,
                ),
            default: 'neutral',
        },
        outline: {
            responsive: false,
            type: PropTypes.Boolean,
            validate: (value) => typeof value === 'boolean',
            default: false,
            transform: () => 'outline',
        },
        size: {
            responsive: true,
            type: PropTypes.String,
            validate: (value) => Size[value!] !== undefined,
            default: 'md',
            transform: (value) => Size[value!],
        },
    },
} as ComponentSchema<BadgeProps>;
