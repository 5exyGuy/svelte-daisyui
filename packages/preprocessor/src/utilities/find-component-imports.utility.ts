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
        if (importName.startsWith('{') && importName.endsWith('}'))
            addNamedImports(importName, componentImports, fileName);
        // Default import
        else if (componentName) addDefaultImports(importName, componentName, componentImports, fileName);
        else throw new Error(`Invalid import statement in ${fileName}`);
    });

    return componentImports;
}

function addNamedImports(importName: string, componentImports: Map<string, Nullable<string>>, fileName: string) {
    importName
        .slice(1, -1)
        .split(',')
        .forEach((value) => {
            const [name, alias] = value.trim().split(' as ') as [string, string?];
            const aliasName = alias ?? name;
            if (!COMPONENT_NAMES.has(name))
                throw new Error(`Component named ${name} does not exist in ${MAIN_MODULE_NAME} package in ${fileName}`);
            if (componentImports.has(aliasName))
                throw new Error(`Duplicate component import name ${aliasName} in ${fileName}`);
            componentImports.set(aliasName, name);
        });
}

function addDefaultImports(
    importName: string,
    componentName: string,
    componentImports: Map<string, Nullable<string>>,
    fileName: string,
) {
    componentName = componentName.replace(/\.svelte$/, '');
    const [, alias] = importName.split(' as ') as [string, string?];
    const aliasName = alias ?? componentName;
    if (!COMPONENT_NAMES.has(componentName))
        throw new Error(
            `Component named ${componentName} does not exist in ${MAIN_MODULE_NAME} package in ${fileName}`,
        );
    if (componentImports.has(aliasName)) throw new Error(`Duplicate component import name ${aliasName} in ${fileName}`);
    componentImports.set(aliasName, componentName.replace(/\.svelte$/, ''));
}
