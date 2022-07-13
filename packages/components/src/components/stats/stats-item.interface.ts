import type { StringKeyOf } from 'type-fest';
import type { BrandColor, FunctionalColor } from '../../enums';

export interface IStatsItem {
    title?: string;
    value?: string;
    description?: string;
    background?: StringKeyOf<typeof BrandColor & typeof FunctionalColor>;
}
