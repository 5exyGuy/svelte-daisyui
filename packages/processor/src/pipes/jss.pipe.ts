import { Pipe, type PipeData } from './pipe';

export class JssPipe extends Pipe {
    public async process(data: PipeData): Promise<string> {
        return data.source;
    }
}
