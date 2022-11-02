import { CssStylesheet } from './css-stylesheet';

export class CssSelectorBuilder {
    public constructor(private readonly selectors: Array<string>) {}

    public tag(tag: string): CssSelectorBuilder {
        this.selectors.push(tag);
        return this;
    }

    public className(className: string): CssSelectorBuilder {
        this.selectors.push(`.${className}`);
        return this;
    }

    public directChild(): CssSelectorBuilder {
        this.selectors.push('>');
        return this;
    }

    public build(): CssStylesheet {
        return new CssStylesheet(this.selectors.join(''));
    }
}
