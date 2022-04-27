import { Pipe, type PipeData } from './pipe';
import postcss, { type AcceptedPlugin } from 'postcss';

export class PostCssPipe extends Pipe {
    public type: 'Source' | 'FilePath' = 'Source';

    private plugins: AcceptedPlugin[] = [];

    public constructor(...plugins: AcceptedPlugin[]) {
        super();
        this.plugins = plugins;
    }

    public async process({ source }: PipeData): Promise<string> {
        const { css } = await postcss(this.plugins).process(source, {
            from: undefined,
        });
        return css;
    }
}
