import { SCRIPT_REGEX, STYLE_REGEX, SVELTE_COMMENT_REGEX } from '../constants';

export function parseHtml(content: string) {
    return content.replace(SCRIPT_REGEX, '').replace(STYLE_REGEX, '').replace(SVELTE_COMMENT_REGEX, '');
}
