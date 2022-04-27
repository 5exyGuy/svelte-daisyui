import type { StringKeyOf } from '@eztrip/types';

export enum MaskHalfType {
    Half1 = 'half-1',
    Half2 = 'half-2',
}

export type MaskHalfTypeKey = StringKeyOf<typeof MaskHalfType>;
