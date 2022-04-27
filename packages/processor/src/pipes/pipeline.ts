import type { Pipe } from './pipe';

export class Pipeline {
    public readonly name: string;
    public readonly extensions: ReadonlyArray<string>;
    public readonly transformExtension?: string;
    private pipes: Array<Pipe> = [];

    public constructor(
        name: string,
        extensions: Array<string>,
        transformExtension?: string,
    ) {
        this.name = name;
        this.extensions = extensions;
        this.transformExtension = transformExtension;
    }

    public addPipe(...pipes: ReadonlyArray<Pipe>) {
        this.pipes.push(...pipes);
    }

    public async process(filePath: string, source: string): Promise<string> {
        let processedSource = source;
        for (const pipe of this.pipes)
            processedSource = await pipe.process({
                filePath,
                source: processedSource,
            });
        return processedSource;
    }
}
