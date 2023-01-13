import { SCRIPT_REGEX, STYLE_REGEX } from '../constants';
import { parse } from 'svelte/compiler';

export function parseHtml(content: string) {
    return parse(content.replace(SCRIPT_REGEX, '').replace(STYLE_REGEX, '')).html;
}
