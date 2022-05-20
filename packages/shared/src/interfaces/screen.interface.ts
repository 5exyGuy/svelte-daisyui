import type { StringKeyOf } from 'type-fest';
import type { ScreenSize } from '../enums/screen-size.enum';
import type { ClassPropData } from './class-prop-data.interface';

export type Screen<
    T = ClassPropData[],
    K extends string = StringKeyOf<typeof ScreenSize>,
> = {
    [screenSize in K]?: T;
};
