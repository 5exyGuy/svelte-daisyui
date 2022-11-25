import { SCRIPT_REGEX } from '../constants';
import { getAttributes } from './get-attributes.utility';

export function getSvelteScript(code: string) {
    const match = code.match(SCRIPT_REGEX);
    if (!match) return;

    const attributes = getAttributes(match[1]!);
    const content = match[2]!.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1').trim();

    return { attributes, content };
}
