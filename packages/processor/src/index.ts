import { Processor } from './processors/processor';
import { BuildProcessor } from './processors/build.processor';
import { WatchProcessor } from './processors/watch.processor';
import { TypesProcessor } from './processors/types.processor';
import { StylesProcessor } from './processors/styles.processor';

Processor.register('build', BuildProcessor);
Processor.register('watch', WatchProcessor);
Processor.register('types', TypesProcessor);
Processor.register('styles', StylesProcessor);

Processor.start();
