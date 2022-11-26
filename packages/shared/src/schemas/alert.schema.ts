import { object, string } from 'joi';
import type { AlertClassProps } from '../interfaces';

export const AlertSchema = {
    name: 'Alert',
    colors: ['base', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
    defaultColor: 'base',
    propTypes: {
        color: 'string',
    } as Record<keyof AlertClassProps, string>,
    schema: object<AlertClassProps>({ color: string().equal() }),
} as const;
