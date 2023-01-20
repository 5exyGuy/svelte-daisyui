export type PickPropNames<T, K extends keyof T> = K extends string ? K : never;
