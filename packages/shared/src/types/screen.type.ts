import type { StringKeyOf } from 'type-fest';
import type { ScreenSize } from '../enums/screen-size.enum';

export type Screen<T> = Partial<Record<StringKeyOf<Record<ScreenSize, string>>, Partial<T>>>;
