import type { BrandColor, FunctionalColor, Size } from '../enums';
import type { ComponentProps, StringKeyOf } from '../types';

export interface BadgeProps {
    color: StringKeyOf<typeof BrandColor & typeof FunctionalColor> | 'neutral' | 'ghost';
    size: StringKeyOf<typeof Size>;
    outline: boolean;
}

export type BadgeResponsivePropNames = 'color' | 'size';

export type BadgeClassPropNames = 'color' | 'size' | 'outline';

export type BadgeComponentProps = ComponentProps<BadgeProps, BadgeResponsivePropNames>;
