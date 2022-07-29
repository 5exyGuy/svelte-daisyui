export interface DrawerWrapperContext {
    name: string;
    changeVisibility(opened: boolean): void;
    onVisibilityChange(listener: (opened: boolean) => void): void;
}
