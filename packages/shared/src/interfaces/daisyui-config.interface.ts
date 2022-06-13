import type { Theme } from './theme.interface';
import type { Config } from 'tailwindcss';

export type DaisyUIConfig = {
    main: string;
    dark: string;
    included: Array<string>;
    excluded: Array<string>;
    custom: Array<Theme>;
} & Config;
