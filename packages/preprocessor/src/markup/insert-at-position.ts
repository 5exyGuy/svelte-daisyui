export function insertAtPosition(code: string, insert: string, index: number) {
    return code.slice(0, index) + insert + code.slice(index);
}
