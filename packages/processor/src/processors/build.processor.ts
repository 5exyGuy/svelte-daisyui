import { JavascriptPipe } from '../pipes/javascript.pipe';
import { PostCssPipe } from '../pipes/postcss.pipe';
// import { RtlCssPipe } from '../pipes/rtlcss.pipe';
import { SassPipe } from '../pipes/sass.pipe';
import { SveltePipe } from '../pipes/svelte.pipe';
import { Processor } from './processor';
import tailwindcss from 'tailwindcss';
import { TAILWIND_CONFIG } from '@svelte-daisyui/shared';
import autoprefixer from 'autoprefixer';
import type { AddPipelineFunction } from './types/add-pipeline-function.type';
import type { AddPipelineEventFunction } from './types/add-pipeline-event-function.type';

export class BuildProcessor extends Processor {
    public override setupPipelines(add: AddPipelineFunction): void {
        add('svelte', [new SveltePipe()], ['.svelte']);
        add('javascript', [new JavascriptPipe()], ['.js']);
        add(
            'css',
            [
                new SassPipe(),
                new PostCssPipe(tailwindcss(TAILWIND_CONFIG), autoprefixer()),
            ],
            ['.scss', '.sass'],
            '.css',
        );
        // add(
        //     'rtlcss',
        //     [
        //         new SassPipe(),
        //         new PostCssPipe(tailwindcss(TAILWIND_CONFIG), autoprefixer()),
        //         new RtlCssPipe(),
        //     ],
        //     ['.scss', '.sass'],
        //     '.css',
        // );
    }

    public async start(input: string): Promise<void> {
        const files = this.file.readDirRecursively(input);
        for (const filePath of files) await this.process(filePath);
    }

    public override setupPipelineEvents(add: AddPipelineEventFunction): void {
        add(['svelte', 'javascript'], async (data) => {
            const { transformed, output } = data;
            const { filePathWithoutInput, source } = transformed;

            const mainOutputPath = this.file.join(
                output,
                // 'main',
                filePathWithoutInput,
            );
            // const rtlOutputPath = this.file.join(
            //     output,
            //     'rtl',
            //     filePathWithoutInput,
            // );

            this.file.write(mainOutputPath, source);
            // this.file.write(rtlOutputPath, source);
        });
        add(['css'], async (data) => {
            const { transformed, output } = data;
            const { filePathWithoutInput, source } = transformed;

            const mainOutputPath = this.file.join(output, filePathWithoutInput);

            this.file.write(mainOutputPath, source);
        });
        // add(['rtlcss'], async (data) => {
        //     const { transformed, output } = data;
        //     const { filePathWithoutInput, source } = transformed;

        //     const rtlOutputPath = this.file.join(
        //         output,
        //         'rtl',
        //         filePathWithoutInput,
        //     );

        //     this.file.write(rtlOutputPath, source);
        // });
    }
}
