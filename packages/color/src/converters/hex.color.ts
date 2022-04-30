import { ColorModel } from './color-model';
import { HslColor } from './hsl.color';
import { RgbColor } from './rgb.color';

export class HexColor extends ColorModel<string> {
    public constructor(value: string) {
        super();

        this.value = value;
    }

    public toRgb(): RgbColor {
        const hex = this.value.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        return new RgbColor({ r, g, b });
    }

    public toHsl(): HslColor {
        const rgb = this.toRgb();
        const { r, g, b } = rgb.value;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const delta = max - min;
        const h = 0;
        const s = max === 0 ? 0 : delta / max;
        const l = (max + min) / 2;

        return new HslColor({ h, s, l });
    }
}
