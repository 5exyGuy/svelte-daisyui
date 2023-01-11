export function convertToEntries<T>(object?: T) {
    return Object.entries(object || {}) as Array<[keyof T, T[keyof T]]>;
}
