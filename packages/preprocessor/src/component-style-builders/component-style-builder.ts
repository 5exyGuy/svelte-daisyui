export abstract class ComponentStyleBuilder<T> {
    private props: T;

    public abstract build(): string;
}
