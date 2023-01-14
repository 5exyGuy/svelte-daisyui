import type MagicString from 'magic-string';
import type { StyleParseResult } from '../interfaces';

export function appendCssToStyles(output: MagicString, style: StyleParseResult, css: string) {
    if (style.contentStartIndex === -1) {
        output.append(`<style>${css}</style>`);
        return;
    }

    output.appendLeft(style.contentEndIndex, css);
}
