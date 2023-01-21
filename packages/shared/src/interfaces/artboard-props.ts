import type { Alignment, ArtboardSize } from '../enums';
import type { StringKeyOf } from '../types';

export interface ArtboardProps {
    size: StringKeyOf<typeof ArtboardSize>;
    alignment: StringKeyOf<typeof Alignment>;
    demo: boolean;
}

export type ArtboardResponsivePropNames = never;

export type ArtboardClassPropNames = 'alignment' | 'demo' | 'size';

export type ArtboardComponentProps = ArtboardProps;
