import type { Color } from '../color';
import { ColorParser } from './color-parser';

export class HslParser extends ColorParser {
    public parse(value: string): Color {
        throw new Error('Method not implemented.');
    }
}
