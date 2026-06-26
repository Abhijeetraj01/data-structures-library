import { prim } from "./algorithms/graph/Prims";

interface Edge {
    node: string;
    weight: number;
}

const graph =
new Map<string, Edge[]>();

graph.set("A", [
    { node: "B", weight: 1 },
    { node: "C", weight: 4 }
]);

graph.set("B", [
    { node: "A", weight: 1 },
    { node: "C", weight: 2 },
    { node: "D", weight: 5 }
]);

graph.set("C", [
    { node: "A", weight: 4 },
    { node: "B", weight: 2 },
    { node: "D", weight: 3 }
]);

graph.set("D", [
    { node: "B", weight: 5 },
    { node: "C", weight: 3 }
]);

console.log(
    prim(graph, "A")
);