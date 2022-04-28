import type { AddPipelineEventFunction } from './types/add-pipeline-event-function.type';
import type { AddPipelineFunction } from './types/add-pipeline-function.type';
import { Processor } from './processor';
import { SassPipe } from '../pipes/sass.pipe';
import { PostCssPipe } from '../pipes/postcss.pipe';
import { JssPipe } from '../pipes/jss.pipe';
import { TAILWIND_CONFIG } from '@svelte-daisyui/shared';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export class StylesProcessor extends Processor {
    public override setupPipelines(add: AddPipelineFunction): void {
        add(
            'css',
            [
                new SassPipe(),
                new PostCssPipe(tailwindcss(TAILWIND_CONFIG), autoprefixer()),
            ],
            ['sass', 'scss'],
            'css',
        );
        add(
            'jss',
            [
                new SassPipe(),
                new PostCssPipe(tailwindcss(TAILWIND_CONFIG), autoprefixer()),
                new JssPipe(),
            ],
            ['sass', 'scss'],
            'js',
        );
    }

    public override setupPipelineEvents(add: AddPipelineEventFunction): void {
        add(['css'], async (data) => {
            const { transformed, output } = data;
            const { fileName, source } = transformed;
            const outputPath = this.file.join(output, fileName);
            this.file.write(outputPath, source);
        });
        add(['jss'], async (data) => {
            const { transformed, output } = data;
            const { fileName, source } = transformed;
            const outputPath = this.file.join(output, fileName);
            this.file.write(outputPath, source);
        });
    }

    public async start(input: string, _output: string): Promise<void> {
        const files = this.file.readDirRecursively(input);
        for (const filePath of files) await this.process(filePath);
    }
}
