import type { Constructor } from 'type-fest';
import { File } from '@svelte-daisyui/shared';
import { Pipeline } from '../pipes/pipeline';
import minimist from 'minimist';
import type { Pipe } from '../pipes/pipe';
import type { AddPipelineFunction } from './types/add-pipeline-function.type';
import type { PipelineEventFunction } from './types/pipeline-event-function.type';
import type { AddPipelineEventFunction } from './types/add-pipeline-event-function.type';

type ProcessorConstructor = Constructor<Processor, [string, string]>;

export abstract class Processor {
    private static readonly modes: Map<string, ProcessorConstructor> =
        new Map();

    public static register(name: string, mode: ProcessorConstructor): void {
        Processor.modes.set(name, mode);
    }

    public static parseArgv() {
        const args = minimist(process.argv.slice(2), {
            alias: {
                mode: 'm',
                input: 'i',
                output: ['o', 'out'],
            },
        });

        // if (!args._[0] || !args.mode || !args.output || !args.input)
        //     throw new Error('Missing required arguments: mode, input, output');

        return args;
    }

    public static start(): void {
        const args = Processor.parseArgv();

        const ModeClass = Processor.modes.get(args['mode']);
        if (!ModeClass) throw new Error(`Unknown mode name: ${args['mode']}`);

        const mode = new ModeClass(args._[0] as string, args['output']);
        if (mode.setupPipelines)
            mode.setupPipelines(mode.addPipeline.bind(mode));
        if (mode.setupPipelineEvents)
            mode.setupPipelineEvents(mode.subscribePipeline.bind(mode));
        mode.start(mode.input, mode.output);
    }

    protected readonly file: File = new File();
    private readonly pipelines: Map<string, Array<Pipeline>> = new Map();
    private readonly events: Map<string, PipelineEventFunction> = new Map();
    private readonly input: string;
    private readonly output: string;

    public constructor(input: string, output: string) {
        this.input = this.file.normalize(input);
        this.output = this.file.normalize(output);
    }

    private addPipeline(
        name: string,
        pipes: ReadonlyArray<Pipe>,
        extensions: Array<string>,
    ): void {
        const pipeline = new Pipeline(name, extensions);
        pipeline.addPipe(...pipes);

        for (const ext of extensions)
            this.pipelines.set(ext, [
                ...(this.pipelines.get(ext) ?? []),
                pipeline,
            ]);
    }

    private subscribePipeline(
        names: Array<string>,
        fn: PipelineEventFunction,
    ): void {
        for (const name of names) this.events.set(name, fn);
    }

    protected async process(filePath: string) {
        const fileExtension = this.file.getExtension(filePath);
        const source = this.file.read(filePath);

        for (const pipeline of this.pipelines.get(fileExtension) ?? []) {
            const transformExtension = pipeline.transformExtension;
            const processedSource = await pipeline.process(filePath, source);
            const filePathWithoutInput = filePath.replace(this.input, '');
            const fileName = this.file.getName(filePath);
            const transformedFilePath = this.file.changeExtension(
                filePath,
                transformExtension ?? fileExtension,
            );

            const event = this.events.get(pipeline.name);
            if (!event) continue;

            await event({
                input: this.input,
                output: this.output,
                source,
                filePath,
                filePathWithoutInput,
                fileName,
                transformed: {
                    filePath: transformedFilePath,
                    filePathWithoutInput: transformedFilePath.replace(
                        this.input,
                        '',
                    ),
                    fileName: this.file.getName(transformedFilePath),
                    source: processedSource,
                },
            });
        }
    }

    public setupPipelines?(add: AddPipelineFunction): void;

    public setupPipelineEvents?(add: AddPipelineEventFunction): void;

    public abstract start(input: string, output: string): Promise<void>;
}
