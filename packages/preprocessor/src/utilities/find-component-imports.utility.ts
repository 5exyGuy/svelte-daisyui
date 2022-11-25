import type { Nullable } from '@svelte-daisyui/shared';
import { COMPONENT_NAMES, IMPORT_STATEMENT_REGEX, MAIN_MODULE_NAME } from '../constants';

export function findComponentImports(code: string, fileName: string) {
    const matches = [...code.matchAll(IMPORT_STATEMENT_REGEX)];
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
                    if (!COMPONENT_NAMES.has(aliasName))
                        throw new Error(
                            `${aliasName} component does not exist in ${MAIN_MODULE_NAME} package in ${fileName}`,
                        );
                    if (componentImports.has(aliasName))
                        throw new Error(`Duplicate import name ${aliasName} in ${fileName}`);
                    componentImports.set(aliasName, name);
                });
            // Default import
        } else if (componentName) {
            const [, alias] = importName.split(' as ') as [string, string?];
            const aliasName = (alias ?? componentName).replace(/\.svelte$/, '');
            if (!COMPONENT_NAMES.has(aliasName))
                throw new Error(`${aliasName} component does not exist in ${MAIN_MODULE_NAME} package in ${fileName}`);
            if (componentImports.has(aliasName)) throw new Error(`Duplicate import name ${aliasName} in ${fileName}`);
            componentImports.set(aliasName, componentName.replace(/\.svelte$/, ''));
        }
    });

    return componentImports;
}
