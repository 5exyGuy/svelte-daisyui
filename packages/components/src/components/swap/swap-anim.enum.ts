import type { StringKeyOf } from '@eztrip/types';

export enum SwapAnim {
    Rotate = 'rotate',
    Flip = 'flip',
}

export type SwapAnimKey = StringKeyOf<typeof SwapAnim>;
