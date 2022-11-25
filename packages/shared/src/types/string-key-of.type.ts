export type StringKeyOf<BaseType> = `${Extract<keyof BaseType, string | number>}`;
