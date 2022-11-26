import { object, string } from 'joi';
import type { AlertClassProps } from '../interfaces';

export const AlertSchema = object<AlertClassProps>({ color: string().equal() });
