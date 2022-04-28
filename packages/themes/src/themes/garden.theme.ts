import type { PartialDeep } from 'type-fest';
import type { Theme } from '@svelte-daisyui/shared';

export const GardenTheme: PartialDeep<Theme> = {
    name: 'garden',
    colors: {
        primary: '#5c7f67',
        secondary: '#ecf4e7',
        'secondary-content': '#24331a',
        accent: '#fae5e5',
        'accent-content': '#322020',
        neutral: '#5d5656',
        'neutral-content': '#e9e7e7',
        'base-100': '#e9e7e7',
        'base-content': '#100f0f',
    },
};
