import type { ProcessedData } from '../interfaces/processed-data.interface';

export type PipelineEventFunction = (data: ProcessedData) => Promise<void>;
