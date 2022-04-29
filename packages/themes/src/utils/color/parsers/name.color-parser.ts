import type { Color } from '../color';
import { ColorParser } from './color-parser';

export class NameParser extends ColorParser {
    public parse(value: string): Color {
        throw new Error('Method not implemented.');
    }
}
