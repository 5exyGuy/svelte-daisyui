// import type { BrandColor, FunctionalColor } from '../enums';
import type { AvatarStatus } from '../enums/avatar-status';
import type { CSSUnit, StringKeyOf } from '../types';

export interface AvatarProps {
    status: StringKeyOf<typeof AvatarStatus>;
    size: CSSUnit;
    placeholder: boolean;
    // ring: {
    //     color: StringKeyOf<typeof BrandColor & typeof FunctionalColor>;
    //     offsetColor: StringKeyOf<typeof BrandColor & typeof FunctionalColor>;
    //     offsetSize: CSSUnit;
    // };
}

export type AvatarResponsivePropNames = never;

export type AvatarComponentProps = AvatarProps;
