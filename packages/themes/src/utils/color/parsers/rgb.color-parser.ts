import type { Color } from '../color';
import { ColorParser } from './color-parser';

export class RgbParser extends ColorParser {
    public parse(value: string): Color {
        throw new Error('Method not implemented.');
    }
}
