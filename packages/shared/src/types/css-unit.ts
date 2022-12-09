import type { CSSUnitSuffix } from './css-unit-suffix';

export type CSSUnit<Suffix extends CSSUnitSuffix = CSSUnitSuffix> = `${number}${Suffix}`;
