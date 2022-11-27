import { object, string } from 'joi';
import { PropTypes } from '../enums';
import type { AlertProps } from '../interfaces';
import { createSchema } from './create-schema';

// Component Name
const name = 'Alert';
// Component Prop Possible Values
const propValues = {
    color: {
        values: ['base', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
        default: 'base',
    },
} as const;
// Component Prop Types
const propTypes = {
    color: PropTypes.String,
} as const;
// Component Schema
const schema = object<AlertProps>({ color: string().equal(propValues.color.values) });

export const AlertSchema = createSchema<AlertProps>({
    name,
    propValues,
    propTypes,
    schema,
});
