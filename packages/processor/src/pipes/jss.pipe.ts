import { Pipe, type PipeData } from './pipe';
import jss from 'jss';

export class JssPipe extends Pipe {
    public async process(data: PipeData): Promise<string> {
        return data.source;
    }
}
