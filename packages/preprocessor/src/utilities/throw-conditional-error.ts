export function throwConditionalError(condition: boolean, message: string) {
    if (condition) throw Error(message);
}
