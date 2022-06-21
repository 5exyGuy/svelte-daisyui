import type { Alignment } from '../../enums';
import type { StringKeyOf } from 'type-fest';
import type { ArtboardSize } from './artboard-size.enum';
import type { Screen } from '../../types';

export interface ArtboardProps extends Omit<svelte.JSX.HTMLAttributes<HTMLDivElement>, 'size'> {
    /**
     * Fixed size of container.
     * @default '320x568'
     */
    size?: StringKeyOf<typeof ArtboardSize>;

    /**
     * Horizontal and vertical alignment of the container.
     * @default 'horizontal'
     */
    alignment?: StringKeyOf<typeof Alignment>;

    /**
     * Adds shadow and glow. Elements are placed in the center.
     * @default false
     */
    demo?: boolean;

    /**
     * Responsive properties based on minimum screen widths.
     * @default undefined
     */
    screen?: Screen<ArtboardResponsiveProps>;
}

export interface ArtboardResponsiveProps extends Pick<ArtboardProps, 'size' | 'alignment'> {}

export interface ArtboardClassProps extends Pick<ArtboardProps, 'size' | 'alignment' | 'demo'> {}
