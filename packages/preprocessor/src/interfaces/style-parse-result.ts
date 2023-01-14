export interface StyleParseResult {
    attributes: Record<string, string | boolean>;
    content?: string;
    contentStartIndex: number;
    contentEndIndex: number;
}
