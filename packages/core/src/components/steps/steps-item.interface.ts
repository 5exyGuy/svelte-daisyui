import type { StringKeyOf } from 'type-fest';
import type { BrandColor, FunctionalColor } from '../../enums';

export interface IStepsItem {
    color?: StringKeyOf<typeof BrandColor & typeof FunctionalColor> | 'neutral';
    content?: string;
    title?: string;
}
