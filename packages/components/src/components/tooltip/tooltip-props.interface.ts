import type { StringKeyOf } from 'type-fest';
import type { BrandColor, FunctionalColor, Position } from '../../enums';
import type { Screen } from '../../types';

export interface TooltipProps extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
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
    screen?: Screen<TooltipResponsiveProps>;
}

export interface TooltipResponsiveProps extends Pick<TooltipProps, 'color' | 'position' | 'show'> {}

export interface TooltipClassProps extends Pick<TooltipProps, 'color' | 'position' | 'show'> {}
