import type { TemplateNode } from 'svelte/types/compiler/interfaces';

export interface HtmlParseResult {
    template: TemplateNode;
    content: string;
}
