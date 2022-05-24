import type { Primitive, StringKeyOf } from 'type-fest';
import type { ScreenSize } from '../enums';
import type { ClassPropData } from './class-prop-data.interface';

export interface ClassesParams<Props extends string> {
    prefix: string;
    classProps?: Partial<Record<Props, ClassPropData>>;
    props?: Partial<Record<Props, Primitive>>;
    screen?: Partial<
        Record<
            StringKeyOf<typeof ScreenSize>,
            Partial<Record<Props, Primitive>>
        >
    >;
    restClass?: string;
}
