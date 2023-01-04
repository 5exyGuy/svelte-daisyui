import { COMPONENT_NAMES, IMPORT_STATEMENT_REGEX } from '../constants';

export function findImportStatement(moduleName: string, code: string, fileName?: string) {
    const matches = [...code.matchAll(IMPORT_STATEMENT_REGEX(moduleName))];
    const componentImports = new Map<string, Set<string>>();
    if (matches.length === 0) return componentImports;
    matches.map((match) => {
        let [, importName, componentName] = match as [string, string, string?];
        importName = importName.trim();
        const isNamedImport = importName.startsWith('{') && importName.endsWith('}');
        // Named import
        if (isNamedImport && !componentName) {
            importName
                .slice(1, -1)
                .split(',')
                .forEach((value) => {
                    const [componentName, alias] = value.trim().split(' as ') as [string, string?];
                    const aliasName = alias ?? componentName;
                    if (!COMPONENT_NAMES.find((name) => name === componentName))
                        throw new Error(
                            `Component named ${componentName} does not exist in ${moduleName} package in ${fileName}`,
                        );
                    if (componentImports.has(componentName) && componentImports.get(componentName)!.has(aliasName))
                        throw new Error(`Duplicate component import name ${aliasName} in ${fileName}`);
                    componentImports.get(componentName) ?? componentImports.set(componentName, new Set());
                    componentImports.get(componentName)?.add(aliasName);
                });
        }
        // Default import
        else if (!isNamedImport && componentName) {
            componentName = componentName.replace(/\.svelte$/, '');
            const [, alias] = importName.split(' as ') as [string, string?];
            const aliasName = alias ?? componentName;
            if (!COMPONENT_NAMES.find((name) => name === componentName))
                throw new Error(
                    `Component named ${componentName} does not exist in ${moduleName} package in ${fileName}`,
                );
            if (componentImports.has(componentName) && componentImports.get(componentName)!.has(aliasName))
                throw new Error(`Duplicate component import name ${aliasName} in ${fileName}`);
            componentImports.get(componentName) ?? componentImports.set(componentName, new Set());
            componentImports.get(componentName)?.add(aliasName);
        }
        // Invalid import
        else throw new Error(`Invalid import statement in ${fileName}`);
    });
    return componentImports;
}
