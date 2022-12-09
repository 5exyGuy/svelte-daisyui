import type { BrandColor, FunctionalColor } from '../enums';
import type { StringKeyOf } from '../types';
import type { SvelteComponent } from 'svelte';
import type { ComponentsProps } from './component-props';

export interface AlertProps extends ComponentsProps<AlertResponsiveProps> {
    color: StringKeyOf<typeof BrandColor & typeof FunctionalColor> | 'base';
    showIcon: boolean;
    icon: typeof SvelteComponent;
    message: string;
}

export interface AlertResponsiveProps extends Pick<AlertProps, 'color'> {}

export interface AlertClassProps extends Pick<AlertProps, 'color'> {}
