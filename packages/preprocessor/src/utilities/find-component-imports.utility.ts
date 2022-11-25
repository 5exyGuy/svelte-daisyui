import type { Nullable } from '@svelte-daisyui/shared';
import { MAIN_MODULE_NAME } from '../constants';

export function findComponentImports(code: string) {
    // remove comments
    // const codeWithoutComments = code.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1').trim();

    const regex = new RegExp(
        `import([ \n\t]*(?:[^\n\t\{\}]+)|(?:[ \n\t]*\{(?:[ \n\t]*[^ \n\t"'\{\}]+[ \n\t]*,?)+\})?[ \n\t]*)from[ \n\t]*['"]${MAIN_MODULE_NAME}\/?([^ \n\t/]+)?['"]`,
    );

    const matches = [...code.matchAll(regex)];
    const componentImports = new Map<string, Nullable<string>>();
    if (matches.length === 0) return componentImports;

    matches.map((match) => {
        let [, importName, componentName] = match as [string, string, string?];
        importName = importName.trim();

        // Named import
        if (importName.startsWith('{') && importName.endsWith('}')) {
            importName
                .slice(1, -1)
                .split(',')
                .forEach((value) => {
                    const [name, alias] = value.trim().split(' as ') as [string, string?];
                    const aliasName = alias ?? name;
                    if (componentImports.has(aliasName)) throw new Error(`Duplicate import name: ${aliasName}`);
                    componentImports.set(aliasName, name);
                });
            // Default import
        } else if (componentName) {
            const [, alias] = importName.split(' as ') as [string, string?];
            const aliasName = (alias ?? componentName).replace(/\.svelte$/, '');
            if (componentImports.has(aliasName)) throw new Error(`Duplicate import name: ${aliasName}`);
            componentImports.set(aliasName, componentName.replace(/\.svelte$/, ''));
        }
    });

    return componentImports;
}
