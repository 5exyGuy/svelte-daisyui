export interface DrawerWrapperContext {
    name: string;
    changeVisibility(opened: boolean): void;
    onVisibilityChange(fn: (opened: boolean) => void): void;
}
