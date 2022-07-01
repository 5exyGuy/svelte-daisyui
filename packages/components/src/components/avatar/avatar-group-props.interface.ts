import type { CSSUnit } from '@svelte-daisyui/shared';
import type { Screen } from '../../types';

export interface AvatarGroupProps extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
    /**
     * @default '-1.5rem'
     */
    space?: CSSUnit;

    /**
     * Responsive properties based on minimum screen widths.
     * @default undefined
     */
    screen?: Screen<AvatarGroupResponsiveProps>;
}

export interface AvatarGroupResponsiveProps extends Pick<AvatarGroupProps, 'space'> {}
