import type { PipelineEventFunction } from '../types/pipeline-event-function.type';

export type AddPipelineEventFunction = (
    names: Array<string>,
    fn: PipelineEventFunction,
) => void;
