export interface PipeData {
    filePath: string;
    source: string;
}

export abstract class Pipe {
    public abstract process(data: PipeData): Promise<string>;
}
