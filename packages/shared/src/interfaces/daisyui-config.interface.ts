import type { Theme } from './theme.interface';
import type { TailwindConfig } from 'tailwindcss/tailwind-config';

export type DaisyUIConfig = {
    mainTheme: string;
    darkTheme: string;
    enabledDefaultThemes: string[];
    customThemes: Theme[];
} & TailwindConfig;
