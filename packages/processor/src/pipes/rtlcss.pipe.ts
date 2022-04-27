import { Pipe, type PipeData } from './pipe';
import rtlcss from 'rtlcss';

export class RtlCssPipe extends Pipe {
    public async process({ source }: PipeData): Promise<string> {
        return rtlcss.process(source);
    }
}
