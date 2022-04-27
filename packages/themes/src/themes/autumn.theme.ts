import type { PartialDeep } from 'type-fest';
import type { Theme } from '../interfaces/theme.interface';

export const AutumnTheme: PartialDeep<Theme> = {
    name: 'autumn',
    colors: {
        primary: '#8c0327',
        secondary: '#d85251',
        accent: '#d59b6a',
        neutral: '#826a5c',
        'base-100': '#f1f1f1',
        info: '#42adbb',
        success: '#499380',
        warning: '#e97f14',
        error: '#df1a2f',
    },
};
