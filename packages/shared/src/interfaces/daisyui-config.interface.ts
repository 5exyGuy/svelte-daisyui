import type { Theme } from './theme.interface';
import type { TailwindConfig } from 'tailwindcss/tailwind-config';

export type DaisyUIConfig = {
    main: string;
    dark: string;
    included: Array<string>;
    excluded: Array<string>;
    custom: Array<Theme>;
} & TailwindConfig;
