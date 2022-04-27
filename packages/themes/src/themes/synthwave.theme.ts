import type { PartialDeep } from 'type-fest';
import type { Theme } from '../interfaces/theme.interface';

export const SynthwaveTheme: PartialDeep<Theme> = {
    name: 'synthwave',
    colors: {
        primary: '#e779c1',
        secondary: '#58c7f3',
        accent: '#f3cc30',
        neutral: '#20134e',
        'neutral-content': '#f9f7fd',
        'base-100': '#2d1b69',
        'base-content': '#f9f7fd',
        info: '#53c0f3',
        'info-content': '#201047',
        success: '#71ead2',
        'success-content': '#201047',
        warning: '#f3cc30',
        'warning-content': '#201047',
        error: '#e24056',
        'error-content': '#f9f7fd',
    },
};
