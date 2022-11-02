export class CssStylesheet {
    public constructor(
        public mediaQuery?: string,
        public selector: string = '*',
        private readonly rules: Map<string, string | number> = new Map(),
    ) {}

    public media(mediaQuery: string): void {
        this.mediaQuery = mediaQuery;
    }

    public addRule(key: string, value: string | number): void {
        this.rules.set(key, value);
    }

    public toString(): string {
        const rules = [...this.rules.entries()].map(([key, value]) => `${key}: ${value};`).join(' ');

        return `${this.mediaQuery ? `${this.mediaQuery} {` : ''}${this.selector} { ${rules} }${
            this.mediaQuery ? '}' : ''
        }`;
    }
}
