import type { PartialDeep } from 'type-fest';
import type { Theme } from '../interfaces/theme.interface';

export const CyberpunkTheme: PartialDeep<Theme> = {
    name: 'cyberpunk',
    'font-family':
        'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace',
    colors: {
        primary: '#ff7598',
        secondary: '#75d1f0',
        accent: '#c07eec',
        neutral: '#423f00',
        'neutral-content': '#ffee00',
        'base-100': '#ffee00',
    },
    variables: {
        box: {
            'border-radius': '0',
        },
        button: {
            'border-radius': '0',
        },
        badge: {
            'border-radius': '0',
        },
        tab: {
            'border-radius': '0',
        },
    },
};
