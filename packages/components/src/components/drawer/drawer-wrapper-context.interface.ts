export interface DrawerWrapperContext {
    changeVisibility(opened: boolean): void;
    onVisibilityChange(listener: (opened: boolean) => void): void;
}
