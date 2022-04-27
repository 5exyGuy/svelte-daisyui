import type { PartialDeep } from 'type-fest';
import type { Theme } from '../interfaces/theme.interface';

export const BusinessTheme: PartialDeep<Theme> = {
    name: 'business',
    colors: {
        primary: '#1c4e80',
        secondary: '#7c909a',
        accent: '#ea6947',
        neutral: '#23282e',
        'base-100': '#202020',
        info: '#0091d5',
        success: '#6bb187',
        warning: '#dbae59',
        error: '#ac3e31',
    },
    variables: {
        box: {
            'border-radius': '0.25rem',
        },
        button: {
            'border-radius': '0.125rem',
        },
        badge: {
            'border-radius': '0.125rem',
        },
    },
};
