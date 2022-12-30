import type { BrandColor, FunctionalColor } from '../enums';
import type { StringKeyOf } from '../types';
import type { SvelteComponent } from 'svelte';
import type { ComponentProps } from '../types';

export interface AlertProps extends ComponentProps<AlertResponsiveProps> {
    showIcon: boolean;
    icon: typeof SvelteComponent;
    message: string;
}

export interface AlertResponsiveProps {
    color: StringKeyOf<typeof BrandColor & typeof FunctionalColor> | 'base';
}
