export interface ScriptParseResult {
    instance?: { attributes: Record<string, string | boolean>; content: string };
    module?: { attributes: Record<string, string | boolean>; content: string };
}
