import type { CSSUnitSuffix } from './css-unit-suffix.type';

export type CSSUnit<Suffix extends CSSUnitSuffix = CSSUnitSuffix> = `${number}${Suffix}`;
