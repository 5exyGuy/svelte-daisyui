import { Processor } from './processor';
import { sveld } from 'sveld';

export class TypesProcessor extends Processor {
    public async start(input: string, output: string): Promise<void> {
        await sveld({ input, typesOptions: { outDir: output } });
    }
}
