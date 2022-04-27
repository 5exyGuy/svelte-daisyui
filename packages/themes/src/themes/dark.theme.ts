import type { PartialDeep } from 'type-fest';
import type { Theme } from '../interfaces/theme.interface';

export const DarkTheme: PartialDeep<Theme> = {
    name: 'dark',
    colors: {
        primary: '#661ae6',
        'primary-content': '#ffffff',
        secondary: '#d926aa',
        'secondary-content': '#ffffff',
        accent: '#1fb2a5',
        'accent-content': '#ffffff',
        neutral: '#191d24',
        'neutral-focus': '#111318',
        'neutral-content': '#a6adbb',
        'base-100': '#2a303c',
        'base-200': '#242933',
        'base-300': '#20252e',
        'base-content': '#a6adbb',
    },
};
