export class CssStylesheet {
    public constructor(
        public selector: string = '',
        private readonly rules: Map<string, string | number> = new Map(),
    ) {}

    public addRule(key: string, value: string | number): void {
        this.rules.set(key, value);
    }

    public build(): string {
        const rules = Array.from(this.rules.entries())
            .map(([key, value]) => `${key}: ${value};`)
            .join(' ');
        return `${this.selector} { ${rules} }`;
    }
}
