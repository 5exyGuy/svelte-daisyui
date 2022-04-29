import type { Color } from '../color';

export abstract class ColorParser {
    public abstract parse(value: string): Color;
}
