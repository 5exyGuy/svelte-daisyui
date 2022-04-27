import type { PartialDeep } from 'type-fest';
import type { Theme } from '../interfaces/theme.interface';

export const FantasyTheme: PartialDeep<Theme> = {
    name: 'fantasy',
    colors: {
        primary: '#6e0b75',
        secondary: '#007ebd',
        accent: '#f8860d',
        neutral: '#1f2937',
        'base-100': '#ffffff',
        'base-content': '#1f2937',
    },
};
