export interface StyleBuilder {
    build(aliases: Set<string>, code: string): string;
}
