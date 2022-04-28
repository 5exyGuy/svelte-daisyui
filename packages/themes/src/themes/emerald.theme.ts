import type { PartialDeep } from 'type-fest';
import type { Theme } from '@svelte-daisyui/shared';

export const EmeraldTheme: PartialDeep<Theme> = {
    name: 'emerald',
    colors: {
        primary: '#66cc8a',
        'primary-content': '#223d30',
        secondary: '#377cfb',
        'secondary-content': '#f9fafb',
        accent: '#ea5234',
        'accent-content': '#f9fafb',
        neutral: '#333c4d',
        'neutral-content': '#f9fafb',
        'base-100': '#ffffff',
        'base-content': '#333c4d',
    },
    variables: {
        button: {
            'animation-duration': '0',
            'focus-scale': '1',
        },
        input: {
            'animation-duration': '0',
        },
    },
};
