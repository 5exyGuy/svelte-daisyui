import type { Alignment } from '../../enums';
import type { StringKeyOf } from 'type-fest';
import type { ArtboardSize } from './artboard-size.enum';

export interface ArtboardProps extends Omit<svelte.JSX.HTMLAttributes<HTMLDivElement>, 'size'> {
    size?: StringKeyOf<typeof ArtboardSize>;
    alignment?: StringKeyOf<typeof Alignment>;
    demo?: boolean;
}

export interface ArtboardResponsiveProps extends Pick<ArtboardProps, 'size' | 'alignment'> {}

export interface ArtboardClassProps extends ArtboardProps {}
