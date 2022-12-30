export interface StyleBuilder {
    build(aliases: Array<string>, code: string): string;
}
