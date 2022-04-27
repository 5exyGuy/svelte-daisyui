import type { PartialDeep } from 'type-fest';
import type { Theme } from '../interfaces/theme.interface';

export const LightTheme: PartialDeep<Theme> = {
    name: 'light',
    colors: {
        primary: '#570df8',
        'primary-content': '#ffffff',
        secondary: '#f000b8',
        'secondary-content': '#ffffff',
        accent: '#37cdbe',
        'accent-content': '#163835',
        neutral: '#3d4451',
        'neutral-content': '#ffffff',
        'base-100': '#ffffff',
        'base-200': '#f2f2f2',
        'base-300': '#e5e6e6',
        'base-content': '#1f2937',
    },
};
