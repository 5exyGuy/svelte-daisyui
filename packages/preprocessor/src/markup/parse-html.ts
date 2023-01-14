import { SCRIPT_REGEX, STYLE_REGEX } from '../constants';
import { parse } from 'svelte/compiler';
import type { HtmlParseResult } from '../interfaces';

export function parseHtml(content: string) {
    content = content.replace(SCRIPT_REGEX, '').replace(STYLE_REGEX, '');
    return { template: parse(content).html, content } as HtmlParseResult;
}
