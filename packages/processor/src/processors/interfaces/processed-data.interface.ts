interface TransformedData {
    filePath: string;
    filePathWithoutInput: string;
    fileName: string;
    source: string;
}

export interface ProcessedData {
    input: string;
    output: string;
    source: string;
    filePath: string;
    filePathWithoutInput: string;
    fileName: string;
    transformed: TransformedData;
}
