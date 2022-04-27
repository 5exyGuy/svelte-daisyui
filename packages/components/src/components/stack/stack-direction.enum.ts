import type { StringKeyOf } from '@eztrip/types';

export enum StackDirection {
    Up = 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right',
    UpLeft = 'upleft',
    UpRight = 'upright',
    DownLeft = 'downleft',
    DownRight = 'downright',
}

export type StackDirectionKey = StringKeyOf<typeof StackDirection>;
