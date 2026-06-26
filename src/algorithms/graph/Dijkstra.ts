type Edge = {
    node: string;
    weight: number;
};

type WeightedGraph = Map<
    string,
    Edge[]
>;


//finding closest node - O(V² + E)
export function dijkstra(
    graph: WeightedGraph,
    start: string
): Map<string, number> {

    const distances = new Map<
        string,
        number
    >();

    const visited = new Set<string>();

    // Initialize distances
    for (const node of graph.keys()) {
        distances.set(node, Infinity);
    }

    distances.set(start, 0);

    while (visited.size < graph.size) {

        const current =
            getClosestNode(
                distances,
                visited
            );

        if (current === null) {
            break;
        }

        visited.add(current);

        const neighbors =
            graph.get(current) || [];

        for (const edge of neighbors) {

            const newDistance =
                distances.get(current)! +
                edge.weight;

            if (
                newDistance <
                distances.get(edge.node)!
            ) {
                distances.set(
                    edge.node,
                    newDistance
                );
            }
        }
    }

    return distances;
}

function getClosestNode(
    distances: Map<string, number>,
    visited: Set<string>
): string | null {

    let closestNode: string | null =
        null;

    let shortestDistance =
        Infinity;

    for (const [
        node,
        distance
    ] of distances) {

        if (
            !visited.has(node) &&
            distance < shortestDistance
        ) {

            shortestDistance =
                distance;

            closestNode = node;
        }
    }

    return closestNode;
}
