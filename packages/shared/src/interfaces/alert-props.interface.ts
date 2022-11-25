import type { BrandColor, FunctionalColor } from '../enums';
import type { Screen, StringKeyOf } from '../types';
import type { SvelteComponent } from 'svelte';

export interface AlertProps {
    color?: StringKeyOf<typeof BrandColor & typeof FunctionalColor> | 'base';
    showIcon?: boolean;
    icon?: typeof SvelteComponent;
    message?: string;
    screen?: Screen<AlertResponsiveProps>;
}

export interface AlertResponsiveProps extends Pick<AlertProps, 'color'> {}

export interface AlertClassProps extends Pick<AlertProps, 'color'> {}
