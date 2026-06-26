import { PriorityQueue } from "./PriorityQueue";

type Edge = {
    node: string;
    weight: number;
};

type WeightedGraph = Map<string, Edge[]>;

type MSTEdge = {
    source: string;
    destination: string;
    weight: number;
};

export function prim(
    graph: WeightedGraph,
    start: string
): MSTEdge[] {

    const mst: MSTEdge[] = [];

    const visited = new Set<string>();

    const pq = new PriorityQueue();

    const parent = new Map<string, string>();

    const weights = new Map<string, number>();

    // Initialize all vertices
    for (const vertex of graph.keys()) {
        weights.set(vertex, Infinity);
    }

    weights.set(start, 0);

    pq.enqueue(start, 0);

    while (!pq.isEmpty()) {

        const current = pq.dequeue();

        if (current === null) {
            break;
        }

        if (visited.has(current.node)) {
            continue;
        }

        visited.add(current.node);

        if (parent.has(current.node)) {
            mst.push({
                source: parent.get(current.node)!,
                destination: current.node,
                weight: weights.get(current.node)!
            });
        }

        const neighbors =
            graph.get(current.node) || [];

        for (const edge of neighbors) {

            if (
                !visited.has(edge.node) &&
                edge.weight < weights.get(edge.node)!
            ) {

                weights.set(
                    edge.node,
                    edge.weight
                );

                parent.set(
                    edge.node,
                    current.node
                );

                pq.enqueue(
                    edge.node,
                    edge.weight
                );
            }
        }
    }

    return mst;
}