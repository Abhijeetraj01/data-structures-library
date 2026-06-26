import { UnionFind } from "../../structures/UnionFind";

type Edge = {
    source: string;
    destination: string;
    weight: number;
};

export function kruskal(
    vertices: string[],
    edges: Edge[]
): Edge[] {

    const mst: Edge[] = [];

    const unionFind = new UnionFind<string>();

    // Create one set for every vertex
    for (const vertex of vertices) {
        unionFind.makeSet(vertex);
    }

    // Sort edges by weight
    edges.sort(
        (a, b) => a.weight - b.weight
    );

    for (const edge of edges) {

        if (
            !unionFind.connected(
                edge.source,
                edge.destination
            )
        ) {

            unionFind.union(
                edge.source,
                edge.destination
            );

            mst.push(edge);
        }

        if (
            mst.length === vertices.length - 1
        ) {
            break;
        }
    }

    return mst;
}