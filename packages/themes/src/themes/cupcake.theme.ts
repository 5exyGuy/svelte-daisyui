import type { PartialDeep } from 'type-fest';
import type { Theme } from '../interfaces/theme.interface';

export const CupcakeTheme: PartialDeep<Theme> = {
    name: 'cupcake',
    colors: {
        primary: '#65c3c8',
        secondary: '#ef9fbc',
        accent: '#eeaf3a',
        neutral: '#291334',
        'base-100': '#faf7f5',
        'base-200': '#efeae6',
        'base-300': '#e7e2df',
        'base-content': '#291334',
    },
    variables: {
        button: {
            'border-radius': '1.9rem',
        },
        tab: {
            'border-radius': '0.5rem',
            'border-width': '2px',
        },
    },
};
