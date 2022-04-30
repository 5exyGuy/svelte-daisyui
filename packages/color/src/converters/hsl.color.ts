import type { HSL, HSLA } from '../types';
import { ColorModel } from './color-model';
import { HexColor } from './hex.color';
import { RgbColor } from './rgb.color';

export class HslColor extends ColorModel<HSLA> {
    public constructor(value: HSL | HSLA) {
        super();

        const hsla = value as HSLA;
        this.value = {
            h: hsla.h,
            s: hsla.s,
            l: hsla.l,
            a: hsla.a ?? 1,
        };
    }

    public toRgb(): RgbColor {
        const { h, s, l, a } = this.value;
        const c = (1 - Math.abs(2 * l - 1)) * s;
        const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
        const m = l - c / 2;
        let r = 0;
        let g = 0;
        let b = 0;

        if (h >= 0 && h < 60) {
            r = c;
            g = x;
            b = 0;
        } else if (h >= 60 && h < 120) {
            r = x;
            g = c;
            b = 0;
        } else if (h >= 120 && h < 180) {
            r = 0;
            g = c;
            b = x;
        } else if (h >= 180 && h < 240) {
            r = 0;
            g = x;
            b = c;
        } else if (h >= 240 && h < 300) {
            r = x;
            g = 0;
            b = c;
        } else if (h >= 300 && h < 360) {
            r = c;
            g = 0;
            b = x;
        }

        return new RgbColor({
            r: Math.round((r + m) * 255),
            g: Math.round((g + m) * 255),
            b: Math.round((b + m) * 255),
            a,
        });
    }

    public toHex(): HexColor {
        const rgb = this.toRgb();
        const { r, g, b } = rgb.value;
        const hex = [r, g, b]
            .map((n) => n.toString(16).padStart(2, '0'))
            .join('');

        return new HexColor(`#${hex}`);
    }
}
