import type { StringKeyOf } from '@eztrip/types';

export enum ArtboardSize {
    Phone1 = 'phone-1',
    Phone2 = 'phone-2',
    Phone3 = 'phone-3',
    Phone4 = 'phone-4',
    Phone5 = 'phone-5',
    Phone6 = 'phone-6',
}

export type ArtboardSizeKey = StringKeyOf<typeof ArtboardSize>;
