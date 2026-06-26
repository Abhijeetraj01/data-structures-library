import { PriorityQueue } from "./PriorityQueue";

type Edge = {
    node: string;
    weight: number;
};

type WeightedGraph =
    Map<string, Edge[]>;

export function dijkstra(
    graph: WeightedGraph,
    start: string
): Map<string, number> {

    const distances =
        new Map<string, number>();

    const visited =
        new Set<string>();

    const pq =
        new PriorityQueue();

    for (const node of graph.keys()) {
        distances.set(node, Infinity);
    }

    distances.set(start, 0);

    pq.enqueue(start, 0);

    while (!pq.isEmpty()) {

        const current =
            pq.dequeue();

        if (current === null) {
            break;
        }

        if (
            visited.has(current.node)
        ) {
            continue;
        }

        visited.add(current.node);

        const neighbors =
            graph.get(current.node) || [];

        for (const edge of neighbors) {

            const newDistance =
                distances.get(current.node)! +
                edge.weight;

            if (
                newDistance <
                distances.get(edge.node)!
            ) {

                distances.set(
                    edge.node,
                    newDistance
                );

                pq.enqueue(
                    edge.node,
                    newDistance
                );
            }
        }
    }

    return distances;
}