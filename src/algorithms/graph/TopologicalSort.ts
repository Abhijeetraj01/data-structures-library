type DirectedGraph = Map<string, string[]>;

export function topologicalSort(
    graph: DirectedGraph
): string[] {

    const visited = new Set<string>();
    const stack: string[] = [];

    for (const node of graph.keys()) {
        if (!visited.has(node)) {
            dfs(
                node,
                graph,
                visited,
                stack
            );
        }
    }

    return stack.reverse();
}

function dfs(
    node: string,
    graph: DirectedGraph,
    visited: Set<string>,
    stack: string[]
): void {

    visited.add(node);

    const neighbors = graph.get(node) || [];

    for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
            dfs(
                neighbor,
                graph,
                visited,
                stack
            );
        }
    }

    stack.push(node);
}