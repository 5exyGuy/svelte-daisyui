import type { PartialDeep } from 'type-fest';
import type { Theme } from '../interfaces/theme.interface';

export const BumblebleeTheme: PartialDeep<Theme> = {
    name: 'bumbleblee',
    colors: {
        primary: '#e0a82e',
        'primary-content': '#181830',
        secondary: '#f9d72f',
        'secondary-content': '#181830',
        accent: '#181830',
        neutral: '#181830',
        'base-100': '#ffffff',
    },
};
