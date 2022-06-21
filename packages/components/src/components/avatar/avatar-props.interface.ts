import type { CSSUnit } from '@svelte-daisyui/shared';
import type { StringKeyOf } from 'type-fest';
import type { BrandColor, FunctionalColor } from '../../enums';
import type { Screen } from '../../types';
import type { AvatarStatus } from './avatar-status.enum';

export interface AvatarProps extends Omit<svelte.JSX.HTMLAttributes<HTMLDivElement>, 'size' | 'placeholder'> {
    /**
     * @default undefined
     */
    status?: StringKeyOf<typeof AvatarStatus>;

    /**
     * @default '6rem'
     */
    size?: CSSUnit;

    /**
     * @default false
     */
    placeholder?: boolean;

    /**
     * @default undefined
     */
    ring?: {
        color: StringKeyOf<typeof BrandColor & typeof FunctionalColor>;
        offsetColor?: StringKeyOf<typeof BrandColor & typeof FunctionalColor>;
        offsetSize?: CSSUnit;
    };

    /**
     * Responsive properties based on minimum screen widths.
     * @default undefined
     */
    screen?: Screen<AvatarResponsiveProps>;
}

export interface AvatarResponsiveProps extends Pick<AvatarProps, 'size'> {}

export interface AvatarClassProps extends Pick<AvatarProps, 'status' | 'placeholder'> {}
