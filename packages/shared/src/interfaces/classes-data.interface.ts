import type { ClassPropData } from './class-prop-data.interface';
import type { Screen } from './screen.interface';

export interface ClassesData {
    prefix: string;
    classProps?: Array<ClassPropData>;
    restClass?: string;
    screen?: Screen;
}
