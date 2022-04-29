import type { Color } from '../color';
import { ColorParser } from './color-parser';

export class HexParser extends ColorParser {
    public parse(value: string): Color {}
}
