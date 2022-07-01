import type { BreadcrumbItem } from './breadcrumb-item.interface';

export interface BreadcrumbGroupProps extends svelte.JSX.HTMLAttributes<HTMLUListElement> {
    /**
     * @default undefined
     */
    items: Array<BreadcrumbItem>;
}
