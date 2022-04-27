import { Pipe, type PipeData } from './pipe';

export class JavascriptPipe extends Pipe {
    public async process({ source }: PipeData): Promise<string> {
        return source;
    }
}
