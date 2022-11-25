import type { ScreenSize } from '../enums';
import type { StringKeyOf } from './string-key-of.type';

export type ScreenSizeNames = StringKeyOf<typeof ScreenSize>;
