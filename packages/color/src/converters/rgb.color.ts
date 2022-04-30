import type { RGB, RGBA } from '../types';
import { ColorModel } from './color-model';
import { HexColor } from './hex.color';
import { HslColor } from './hsl.color';

export class RgbColor extends ColorModel<RGBA> {
    public constructor(value: RGB | RGBA) {
        super();

        const rgba = value as RGBA;
        this.value = {
            r: rgba.r,
            g: rgba.g,
            b: rgba.b,
            a: rgba.a ?? 1,
        };
    }

    public toHsl(): HslColor {
        const { r, g, b } = this.value;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const delta = max - min;
        const h = 0;
        const s = max === 0 ? 0 : delta / max;
        const l = (max + min) / 2;
        const a = this.value.a;

        return new HslColor({ h, s, l, a });
    }

    public toHex(): HexColor {
        const { r, g, b } = this.value;
        const hex = [r, g, b]
            .map((n) => n.toString(16).padStart(2, '0'))
            .join('');

        return new HexColor(`#${hex}`);
    }
}
