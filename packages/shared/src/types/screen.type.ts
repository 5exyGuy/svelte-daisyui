import type { StringKeyOf } from 'type-fest';
import type { ScreenSize } from '../enums/screen-size.enum';

export type Screen<
    K,
    T extends string = StringKeyOf<typeof ScreenSize>
> = Partial<Record<T, Partial<K>>>;