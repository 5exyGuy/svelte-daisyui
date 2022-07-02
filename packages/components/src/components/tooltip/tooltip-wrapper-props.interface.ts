import type { StringKeyOf } from 'type-fest';
import type { BrandColor, FunctionalColor, Position } from '../../enums';
import type { Screen } from '../../types';

export interface TooltipWrapperProps extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
    /**
     * @default undefined
     */
    color?: StringKeyOf<typeof BrandColor & typeof FunctionalColor>;

    /**
     * @default 'top'
     */
    position?: StringKeyOf<typeof Position>;

    /**
     * @default false
     */
    show?: boolean;

    /**
     * @default undefined
     */
    screen?: Screen<TooltipWrapperResponsiveProps>;
}

export interface TooltipWrapperResponsiveProps extends Pick<TooltipWrapperProps, 'color' | 'position' | 'show'> {}

export interface TooltipClassProps extends Pick<TooltipWrapperProps, 'color' | 'position' | 'show'> {}
