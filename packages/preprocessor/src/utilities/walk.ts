import type { Node } from '../interfaces';

export function walk(node: Node, callback: (node: Node) => void) {
    callback(node);
    node.children?.forEach((child) => walk(child, callback));
}
