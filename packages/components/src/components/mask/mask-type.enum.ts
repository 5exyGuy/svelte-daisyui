import type { StringKeyOf } from '@eztrip/types';

export enum MaskType {
    Squircle = 'squircle',
    Heart = 'heart',
    Hexagon = 'hexagon',
    Hexagon2 = 'hexagon-2',
    Decagon = 'decagon',
    Pentagon = 'pentagon',
    Diamond = 'diamond',
    Square = 'square',
    Circle = 'circle',
    Parallelogram = 'parallelogram',
    Parallelogram2 = 'parallelogram-2',
    Parallelogram3 = 'parallelogram-3',
    Parallelogram4 = 'parallelogram-4',
    Star = 'star',
    Star2 = 'star-2',
    Triangle = 'triangle',
    Triangle2 = 'triangle-2',
    Triangle3 = 'triangle-3',
    Triangle4 = 'triangle-4',
}

export type MaskTypeKey = StringKeyOf<typeof MaskType>;
