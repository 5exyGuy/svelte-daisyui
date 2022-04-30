import type { RgbColor } from './converters/rgb.color';
import type { AnyColor, RGBA } from './types';

export class Color {
    private readonly rgbColor: RgbColor;

    public constructor(input: AnyColor) {
        if (typeof input === 'string') {
        } else if (typeof input === 'object') {
        }
    }

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

    public mix(color: Color, weight: number = 0.5): Color {
        const rgba = color.rgba;

        const w = 2 * weight - 1;
        const a = this.rgba.a - rgba.a;

        const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
        const w2 = 1 - w1;

        return new Color({
            r: this.rgba.r * w1 + rgba.r * w2,
            g: this.rgba.g * w1 + rgba.g * w2,
            b: this.rgba.b * w1 + rgba.b * w2,
            a: this.rgba.a * weight + rgba.a * (1 - weight),
        });
    }
}
