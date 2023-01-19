import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

export function findStylesPackage(main: string) {
    if (path.isAbsolute(main)) {
        console.warn(
            'The "main" field in the package.json must be a relative path inside the "@svelte-daisyui/preprocessor" package.',
        );
        return;
    }

    const currentDir = process.cwd();
    let pathToStylesPackage = path.join(currentDir, 'node_modules', '@svelte-daisyui', 'styles');

    if (fs.existsSync(pathToStylesPackage)) return pathToStylesPackage;

    const normalizedMain = path.normalize(main);
    pathToStylesPackage = path.dirname(fileURLToPath(import.meta.url));
    for (let i = 0; i < normalizedMain.split(path.sep).length; i++)
        pathToStylesPackage = path.join(pathToStylesPackage, '..');
    pathToStylesPackage = path.join(pathToStylesPackage, 'node_modules', '@svelte-daisyui', 'styles');

    if (fs.existsSync(pathToStylesPackage)) return pathToStylesPackage;

    console.warn(
        'Could not find the @svelte-daisyui/styles package. Try reinstalling the "@svelte-daisyui/preprocessor" package or install the "@svelte-daisyui/styles" package manually inside your project.',
    );
    return;
}
