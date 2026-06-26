export class UnionFind<T> {
    private parent: Map<T, T>;
    private rank: Map<T, number>;
    private count: number;

    constructor() {
        this.parent = new Map();
        this.rank = new Map();
        this.count = 0;
    }

    //create a new set
    makeSet(value: T): void {
        if (this.parent.has(value)) {
            return;
        }

        this.parent.set(value, value);
        this.rank.set(value, 0);
        this.count++;
    }

    //find the representative (root) of a set
    find(value: T): T {
        if (!this.parent.has(value)) {
            throw new Error("Element does not exist.");
        }

        const parent = this.parent.get(value)!;

        if (parent !== value) {
            this.parent.set(
                value,
                this.find(parent)
            );
        }

        return this.parent.get(value)!;
    }

    //merge two sets
    union(value1: T, value2: T): boolean {
        const root1 = this.find(value1);
        const root2 = this.find(value2);

        if (root1 === root2) {
            return false;
        }

        const rank1 = this.rank.get(root1)!;
        const rank2 = this.rank.get(root2)!;

        if (rank1 < rank2) {
            this.parent.set(root1, root2);
        } else if (rank1 > rank2) {
            this.parent.set(root2, root1);
        } else {
            this.parent.set(root2, root1);
            this.rank.set(root1, rank1 + 1);
        }

        this.count--;

        return true;
    }

    //check if two elements belong to the same set
    connected(value1: T, value2: T): boolean {
        return this.find(value1) === this.find(value2);
    }

    //return the number of disjoint sets
    size(): number {
        return this.count;
    }
}