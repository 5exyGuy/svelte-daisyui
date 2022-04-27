import { Pipe, type PipeData } from './pipe';
import sass from 'sass';

export class SassPipe extends Pipe {
    public async process({ filePath }: PipeData): Promise<string> {
        const { css } = await sass.compileAsync(filePath);
        return css;
    }
}
