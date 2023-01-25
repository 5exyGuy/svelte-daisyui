import { Alignment, ArtboardSize, PropTypes } from '../enums';
import type { ArtboardProps, ComponentSchema } from '../interfaces';

export const ArtboardSchema = {
    name: 'Artboard',
    data: {
        alignment: {
            required: true,
            responsive: false,
            type: PropTypes.String,
            validate: (value) => Alignment[value!] !== undefined,
            transform: (value) => Alignment[value!],
            default: 'horizontal',
        },
        size: {
            required: true,
            responsive: false,
            type: PropTypes.String,
            validate: (value) => ArtboardSize[value!] !== undefined,
            transform: (value) => ArtboardSize[value!],
            default: '320x568',
        },
        demo: {
            required: false,
            responsive: false,
            type: PropTypes.Boolean,
            validate: (value) => typeof value === 'boolean',
            transform: () => 'demo',
            default: false,
        },
    },
} as ComponentSchema<ArtboardProps>;
