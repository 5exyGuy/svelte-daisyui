import type { Pipe } from '../../pipes/pipe';

export type AddPipelineFunction = (
    name: string,
    pipes: ReadonlyArray<Pipe>,
    extensions: Array<string>,
    transformExtension?: string,
) => void;
