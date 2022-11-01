import type { StringKeyOf } from 'type-fest';
import type { BrandColor } from '../enums/brand-color.enum';
import type { FunctionalColor } from '../enums/functional-color.enum';
import type { Screen } from '../types/screen.type';
import type { SvelteComponent } from 'svelte';

export interface AlertProps extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
    color?: StringKeyOf<typeof BrandColor & typeof FunctionalColor> | 'base';
    showIcon?: boolean;
    icon?: typeof SvelteComponent;
    message?: string;
    screen?: Screen<AlertResponsiveProps>;
}

export interface AlertResponsiveProps extends Pick<AlertProps, 'color'> {}

export interface AlertClassProps extends Pick<AlertProps, 'color'> {}
