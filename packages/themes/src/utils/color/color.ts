import type { AnyColor, HSL, HSLA, RGB, RGBA } from './types';

export class Color {
    private readonly rgba: RGBA;

    public constructor(input: AnyColor) {}

    public toHsl(): HSL {
        const { r, g, b } = this.rgba;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const d = max - min;
        const h =
            max === min
                ? 0
                : max === r
                ? (g - b) / d + (g < b ? 6 : 0)
                : max === g
                ? (b - r) / d + 2
                : (r - g) / d + 4;
        const l = (max + min) / 2;
        const s = max === 0 || max === 1 ? 0 : d / (1 - Math.abs(2 * l - 1));
        return {
            h: h * 60,
            s: s * 100,
            l: l * 100,
        };
    }

    public toHsla(): HSLA {
        return {
            ...this.toHsl(),
            a: this.rgba.a,
        };
    }

    public toHex(): string {
        return (
            '#' +
            this.rgba.r.toString(16) +
            this.rgba.g.toString(16) +
            this.rgba.b.toString(16)
        );
    }

    public toRgb(): RGB {
        return {
            r: this.rgba.r,
            g: this.rgba.g,
            b: this.rgba.b,
        };
    }

    public toRgba(): RGBA {
        return this.rgba;
    }
}
