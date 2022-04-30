import { ColorConverter } from './converters/color-converter';
import { ColorParser } from './parsers/color-parser';
import type { AnyColor, RGBA } from './types';

export class Color {
    private readonly parser: ColorParser = new ColorParser();
    private readonly converter: ColorConverter = new ColorConverter();
    private readonly rgba: RGBA;

    public constructor(input: AnyColor) {}

    public isDark() {
        const { r, g, b } = this.rgba;
        const yiq = (r * 299 + g * 587 + b * 114) / 1000;
        return yiq < 128;
    }

    public isLight() {
        return !this.isDark();
    }

    public lighten(ratio: number): Color {
        return this;
    }

    public darken(ratio: number): Color {
        return this;
    }

    public saturate(): Color {
        return this;
    }

    public desaturate(): Color {
        return this;
    }
}
