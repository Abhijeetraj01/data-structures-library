type QueueNode = {
    node: string;
    priority: number;
};

export class PriorityQueue {
    private heap: QueueNode[];

    constructor() {
        this.heap = [];
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    enqueue(
        node: string,
        priority: number
    ): void {

        this.heap.push({
            node,
            priority
        });

        this.bubbleUp();
    }

    dequeue(): QueueNode | null {

        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop()!;
        }

        const min = this.heap[0];

        this.heap[0] =
            this.heap.pop()!;

        this.bubbleDown();

        return min;
    }

    private bubbleUp(): void {

        let index =
            this.heap.length - 1;

        while (index > 0) {

            const parent =
                Math.floor((index - 1) / 2);

            if (
                this.heap[parent].priority <=
                this.heap[index].priority
            ) {
                break;
            }

            [
                this.heap[parent],
                this.heap[index]
            ] =
            [
                this.heap[index],
                this.heap[parent]
            ];

            index = parent;
        }
    }

    private bubbleDown(): void {

        let index = 0;

        while (true) {

            let smallest = index;

            const left =
                2 * index + 1;

            const right =
                2 * index + 2;

            if (
                left < this.heap.length &&
                this.heap[left].priority <
                this.heap[smallest].priority
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right].priority <
                this.heap[smallest].priority
            ) {
                smallest = right;
            }

            if (
                smallest === index
            ) {
                break;
            }

            [
                this.heap[index],
                this.heap[smallest]
            ] =
            [
                this.heap[smallest],
                this.heap[index]
            ];

            index = smallest;
        }
    }
}