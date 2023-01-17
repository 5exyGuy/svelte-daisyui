import { Alignment, ArtboardSize, PropTypes } from '../enums';
import type { ArtboardProps, ComponentSchema } from '../interfaces';

export const ArtboardSchema = {
    name: 'Artboard',
    data: {
        alignment: {
            responsive: true,
            type: PropTypes.String,
            validation: {
                required: false,
                validator: (value: ArtboardProps['alignment']) => Alignment[value] !== undefined,
            },
            default: 'horizontal',
        },
        size: {
            responsive: true,
            type: PropTypes.String,
            validation: {
                required: false,
                validator: (value: ArtboardProps['size']) => ArtboardSize[value] !== undefined,
            },
            default: '320x568',
        },
        demo: {
            responsive: true,
            type: PropTypes.Boolean,
            validation: {
                required: false,
                validator: (value: ArtboardProps['demo']) => typeof value === 'boolean',
            },
            default: false,
        },
    },
} as ComponentSchema<ArtboardProps>;
