import type { ObjectSchema } from 'joi';
import type { PropTypes } from '../enums';

export interface ComponentSchema<Props> {
    readonly name: string;
    readonly propValues: { [K in keyof Props]?: { values: Array<Props[K]>; default: Props[K] } };
    readonly propTypes: { [K in keyof Props]?: PropTypes };
    readonly schema: ObjectSchema<Props>;
    readonly validate: (object: object) => boolean;
    readonly transform: (object: object) => boolean;
}
