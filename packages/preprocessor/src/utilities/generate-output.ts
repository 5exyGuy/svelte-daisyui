import type MagicString from 'magic-string';

export function generateOutput(magicString: MagicString) {
    return {
        code: magicString.toString(),
        map: magicString.generateMap(),
    };
}
