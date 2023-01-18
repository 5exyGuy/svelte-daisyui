import type { TemplateNode } from 'svelte/types/compiler/interfaces';

export interface StyleBuilder {
    build(aliases: Set<string>, template: TemplateNode, html: string): { libaries: string; components: string };
}
