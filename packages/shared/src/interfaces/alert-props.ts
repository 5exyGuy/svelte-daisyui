import type { BrandColor, FunctionalColor } from '../enums';
import type { StringKeyOf } from '../types';
import type { SvelteComponent } from 'svelte';
import type { ComponentProps } from '../types';

export interface AlertProps {
    color: StringKeyOf<typeof BrandColor & typeof FunctionalColor> | 'base';
    showIcon: boolean;
    icon: typeof SvelteComponent;
    message: string;
}

export type AlertResponsivePropNames = 'color';

export type AlertComponentProps = ComponentProps<AlertProps, AlertResponsivePropNames>;
