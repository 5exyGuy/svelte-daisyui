import type { StringKeyOf } from 'type-fest';
import type { BrandColor, FunctionalColor, Size } from '../../enums';
import type { Screen } from '../../types';
import type { ButtonShape } from './button-shape.enum';

export interface ButtonProps extends Omit<svelte.JSX.HTMLAttributes<HTMLButtonElement>, 'size' | 'loading'> {
    /**
     * @default undefined
     */
    color?: StringKeyOf<typeof BrandColor & typeof FunctionalColor> | 'ghost' | 'link';

    /**
     * @default 'md'
     */
    size?: StringKeyOf<typeof Size>;

    /**
     * @default undefined
     */
    shape?: StringKeyOf<typeof ButtonShape>;

    /**
     * @default false
     */
    active?: boolean;

    /**
     * @default false
     */
    block?: boolean;

    /**
     * @default false
     */
    outline?: boolean;

    /**
     * @default false
     */
    loading?: boolean;

    /**
     * @default false
     */
    disabled?: boolean;

    /**
     * @default false
     */
    animate?: boolean;

    /**
     * Responsive properties based on minimum screen widths.
     * @default undefined
     */
    screen?: Screen<ButtonResponsiveProps>;
}

export interface ButtonResponsiveProps extends Pick<ButtonProps, 'color' | 'size' | 'shape' | 'block'> {}

export interface ButtonClassProps
    extends Pick<ButtonProps, 'color' | 'size' | 'shape' | 'active' | 'block' | 'outline' | 'loading' | 'animate'> {}
