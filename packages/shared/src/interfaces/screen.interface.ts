export type Screen<
    T = undefined,
    K extends string = 'sm' | 'md' | 'lg' | 'xl' | '2xl',
> = {
    [screenSize in K]: Partial<T>;
};
