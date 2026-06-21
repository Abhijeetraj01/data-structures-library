import { Graph } from "./structures/Graph";
const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

graph.addEdge("D", "E");

console.log(
    graph.connectedComponents()
);