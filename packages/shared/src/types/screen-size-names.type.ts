import type { StringKeyOf } from 'type-fest';
import type { ScreenSize } from '../enums';

export type ScreenSizeNames = StringKeyOf<typeof ScreenSize>;
