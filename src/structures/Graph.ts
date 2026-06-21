export class Graph {
    private adjacencyList: Map<string, string[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    // Add a vertex to the graph
    addVertex(vertex: string): void {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    // Add an edge between two vertices in the graph
    addEdge(vertex1: string, vertex2: string): void {
        if (
            !this.adjacencyList.has(vertex1) ||
            !this.adjacencyList.has(vertex2)
        ) {
            return;
        }

        const neighbors1 = this.adjacencyList.get(vertex1)!;
        const neighbors2 = this.adjacencyList.get(vertex2)!;

        if (!neighbors1.includes(vertex2)) {
            neighbors1.push(vertex2);
        }

        if (!neighbors2.includes(vertex1)) {
            neighbors2.push(vertex1);
        }
    }

    //remove a edge between two vertices in the graph
    removeEdge(vertex1: string, vertex2: string): void {
        if (
            !this.adjacencyList.has(vertex1) ||
            !this.adjacencyList.has(vertex2)
        ) {
            return;
        }

        const neighbors1 = this.adjacencyList.get(vertex1)!;
        const neighbors2 = this.adjacencyList.get(vertex2)!;

        const index1 = neighbors1.indexOf(vertex2);
        if (index1 !== -1) {
            neighbors1.splice(index1, 1);
        }

        const index2 = neighbors2.indexOf(vertex1);
        if (index2 !== -1) {
            neighbors2.splice(index2, 1);
        }
    }

    //remove a vertex and all its edges from the graph
    removeVertex(vertex: string): void {
        if (!this.adjacencyList.has(vertex)) {
            return;
        }

        const neighbors = [...this.adjacencyList.get(vertex)!];
        for (const neighbor of neighbors) {
            this.removeEdge(vertex, neighbor);
        }
        this.adjacencyList.delete(vertex);
    }

    // Print the graph's adjacency list
    print(): void {
        for (const [vertex, neighbors] of this.adjacencyList) {
            console.log(
                `${vertex} -> [${neighbors.join(", ")}]`
            );
        }
    }

    //traversal using depth first search
    private dfsHelper(
        vertex: string,
        visited: Set<string>,
        result: string[]
    ): void {

        visited.add(vertex);

        result.push(vertex);

        const neighbors =
            this.adjacencyList.get(vertex) || [];

        for (const neighbor of neighbors) {

            if (!visited.has(neighbor)) {

                this.dfsHelper(
                    neighbor,
                    visited,
                    result
                );
            }
        }
    }

    dfs(startVertex: string): string[] {
        const result: string[] = [];
        const visited = new Set<string>();

        this.dfsHelper(
            startVertex,
            visited,
            result
        );

        return result;
    }

    //traversal using breadth first search
    bfs(startVertex: string): string[] {
        const result: string[] = [];
        const visited = new Set<string>();
        const queue: string[] = [];

        if (!this.adjacencyList.has(startVertex)) {
            return result;
        }

        visited.add(startVertex);
        queue.push(startVertex);

        while (queue.length > 0) {
            const currentVertex = queue.shift()!;

            result.push(currentVertex);

            const neighbors =
                this.adjacencyList.get(currentVertex) || [];

            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }

    //has path between two vertices
    hasPath(vertex1: string, vertex2: string): boolean {
        if (
            !this.adjacencyList.has(vertex1) ||
            !this.adjacencyList.has(vertex2)
        ) {
            return false;
        }

        return this.bfs(vertex1).includes(vertex2);
    }

    //check if the graph has vertex
    hasVertex(vertex: string): boolean {
        return this.adjacencyList.has(vertex);
    }

    //check if the graph has edge between two vertices
    hasEdge(vertex1: string, vertex2: string): boolean {
        if (
            !this.adjacencyList.has(vertex1) ||
            !this.adjacencyList.has(vertex2)
        ) {
            return false;
        }

        return (this.adjacencyList.get(vertex1) || []).includes(vertex2);
    }

    //cycle detection in a graph
    private hasCycleHelper(
        vertex: string,
        visited: Set<string>,
        parent: string | null
    ): boolean {

        visited.add(vertex);

        const neighbors =
            this.adjacencyList.get(vertex) || [];

        for (const neighbor of neighbors) {

            if (!visited.has(neighbor)) {

                if (
                    this.hasCycleHelper(
                        neighbor,
                        visited,
                        vertex
                    )
                ) {
                    return true;
                }

            } else if (neighbor !== parent) {

                return true;
            }
        }

        return false;
    }
        hasCycle(): boolean {
        const visited = new Set<string>();

        for (const vertex of this.adjacencyList.keys()) {
            if (!visited.has(vertex)) {
                if (this.hasCycleHelper(vertex, visited, null)) {
                    return true;
                }
            }
        }

        return false;
    }

    //connected components in a graph
    private connectedComponentsDFS(
        vertex: string,
        visited: Set<string>
    ): void {

        visited.add(vertex);

        const neighbors =
            this.adjacencyList.get(vertex) || [];

        for (const neighbor of neighbors) {

            if (!visited.has(neighbor)) {

                this.connectedComponentsDFS(
                    neighbor,
                    visited
                );
            }
        }
    }
    connectedComponents(): number {
        const visited = new Set<string>();

        let count = 0;

        for (const vertex of this.adjacencyList.keys()) {

            if (!visited.has(vertex)) {

                this.connectedComponentsDFS(
                    vertex,
                    visited
                );

                count++;
            }
        }

        return count;
    }
}
