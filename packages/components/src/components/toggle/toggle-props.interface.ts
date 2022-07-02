import type { StringKeyOf } from 'type-fest';
import type { BrandColor, FunctionalColor, Size } from '../../enums';
import type { Screen } from '../../types';

export interface ToggleProps extends Omit<svelte.JSX.HTMLAttributes<HTMLInputElement>, 'size'> {
    /**
     * @default undefined
     */
    color?: StringKeyOf<typeof BrandColor & typeof FunctionalColor>;

    /**
     * @default 'md'
     */
    size?: StringKeyOf<typeof Size>;

    /**
     * @default false
     */
    disabled?: boolean;

    /**
     * @default false
     */
    checked?: boolean;

    /**
     * @default false
     */
    indeterminate?: boolean;

    /**
     * @default undefined
     */
    screen?: Screen<ToggleResponsiveProps>;
}

export interface ToggleResponsiveProps extends Pick<ToggleProps, 'color' | 'size'> {}

export interface ToggleClassProps extends Pick<ToggleProps, 'color' | 'size'> {}
