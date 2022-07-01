import type { BreadcrumbItem } from './breadcrumb-item.interface';

export interface BreadcrumbItemProps extends svelte.JSX.HTMLAttributes<HTMLLIElement> {
    /**
     * @default undefined
     */
    href?: string;
}
