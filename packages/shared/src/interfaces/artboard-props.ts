import type { Alignment, ArtboardSize } from '../enums';
import type { ComponentProps, StringKeyOf } from '../types';

export interface ArtboardProps {
    size: StringKeyOf<typeof ArtboardSize>;
    alignment: StringKeyOf<typeof Alignment>;
    demo: boolean;
}

export type ArtboardResponsivePropNames = 'size' | 'alignment' | 'demo';

export type ArtboardComponentProps = ComponentProps<ArtboardProps, ArtboardResponsivePropNames>;
