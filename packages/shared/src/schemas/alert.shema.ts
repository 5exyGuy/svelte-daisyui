import { Type } from 'class-transformer';
import type { AlertProps } from '../interfaces';

export class AlertSchema implements AlertProps {
    @Type(() => String)
    color?: AlertProps['color'];
    @Type(() => Boolean)
    showIcon?: boolean;
    @Type(() => String)
    message?: string;
    @Type(() => Object)
    screen?: object;
}
