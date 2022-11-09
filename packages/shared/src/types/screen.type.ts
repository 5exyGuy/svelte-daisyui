import type { ScreenSizeNames } from './screen-size-names.type';

export type Screen<T> = Partial<Record<ScreenSizeNames, Partial<T>> & Record<string, Partial<T>>>;
