import type { Screen } from '../../types';
import type { BrandColor, FunctionalColor, Size } from '../../enums';
import type { StringKeyOf } from 'type-fest';

export interface BadgeProps extends Omit<svelte.JSX.HTMLAttributes<HTMLDivElement>, 'size'> {
    /**
     * @default undefined
     */
    color?: StringKeyOf<typeof BrandColor & typeof FunctionalColor> | 'ghost';

    /**
     * @default 'md'
     */
    size?: StringKeyOf<typeof Size>;

    /**
     * @default false
     */
    outline?: boolean;

    /**
     * A space-separated list of the classes of the element.
     * @default undefined
     */
    class?: string;

    /**
     * Responsive properties based on minimum screen widths.
     * @default undefined
     */
    screen?: Screen<BadgeResponsiveProps>;
}

export interface BadgeResponsiveProps extends Pick<BadgeProps, 'color' | 'size' | 'outline'> {}

export interface BadgeClassProps extends Pick<BadgeProps, 'color' | 'size' | 'outline'> {}
