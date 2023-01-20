// Source: https://github.com/sindresorhus/type-fest

export type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type RequiredFilter<Type, Key extends keyof Type> = undefined extends Type[Key]
    ? Type[Key] extends undefined
        ? Key
        : never
    : Key;

type OptionalFilter<Type, Key extends keyof Type> = undefined extends Type[Key]
    ? Type[Key] extends undefined
        ? never
        : Key
    : never;

type EnforceOptional<ObjectType> = Simplify<
    {
        [Key in keyof ObjectType as RequiredFilter<ObjectType, Key>]: ObjectType[Key];
    } & {
        [Key in keyof ObjectType as OptionalFilter<ObjectType, Key>]?: Exclude<ObjectType[Key], undefined>;
    }
>;

type SimpleMerge<Destination, Source> = {
    [Key in keyof Destination | keyof Source]: Key extends keyof Source
        ? Source[Key]
        : Key extends keyof Destination
        ? Destination[Key]
        : never;
};

export type PickIndexSignature<ObjectType> = {
    [KeyType in keyof ObjectType as {} extends Record<KeyType, unknown> ? KeyType : never]: ObjectType[KeyType];
};

type OmitIndexSignature<ObjectType> = {
    [KeyType in keyof ObjectType as {} extends Record<KeyType, unknown> ? never : KeyType]: ObjectType[KeyType];
};

export type Merge<Destination, Source> = EnforceOptional<
    SimpleMerge<PickIndexSignature<Destination>, PickIndexSignature<Source>> &
        SimpleMerge<OmitIndexSignature<Destination>, OmitIndexSignature<Source>>
>;
