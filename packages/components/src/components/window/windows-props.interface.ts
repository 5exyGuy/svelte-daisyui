export interface WindowsProps extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
    /**
     * @default false
     */
    bordered?: boolean;
}

export interface WindowClassProps extends Pick<WindowsProps, 'bordered'> {}
