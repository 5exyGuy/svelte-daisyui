import type { Screen } from "../types";

export interface ClassesParams<T> {
    prefix: string;
    propData?: { [K in keyof T]?: T[K] extends boolean ? string : T[K] extends string ? Record<T[K], string> : string };
    propValues?: Partial<T>;
    screen?: Screen<T>;
    restClass?: string;
}