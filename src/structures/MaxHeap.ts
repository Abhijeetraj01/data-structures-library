export class MaxHeap {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    private getParentIndex(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    private getLeftChildIndex(index: number): number {
        return 2 * index + 1;
    }

    private getRightChildIndex(index: number): number {
        return 2 * index + 2;
    }

    private swap(index1: number, index2: number): void {
        [this.heap[index1], this.heap[index2]] = 
        [this.heap[index2], this.heap[index1]];
    }

    private bubbleUp(): void{
       let index = this.heap.length - 1;
       while (index > 0) {
           const parentIndex = this.getParentIndex(index);
           if (this.heap[index] <= this.heap[parentIndex]) {
               break;
           }
           this.swap(index, parentIndex);
           index = parentIndex;
       } 
    }

    //insert a new value into the MaxHeap
    insert(value: number): void {
        this.heap.push(value);
        this.bubbleUp();
    }

    private bubbleDown(): void {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let largest = index;

            const leftIndex = this.getLeftChildIndex(index);
            const rightIndex = this.getRightChildIndex(index);

            // Check left child
            if (
                leftIndex < length &&
                this.heap[leftIndex] > this.heap[largest]
            ) {
                largest = leftIndex;
            }

            // Check right child
            if (
                rightIndex < length &&
                this.heap[rightIndex] > this.heap[largest]
            ) {
                largest = rightIndex;
            }

            // Heap property satisfied
            if (largest === index) {
                break;
            }

            this.swap(index, largest);

            index = largest;
        }
    }

    // Remove and return the maximum value from the MaxHeap
    extractMax(): number | undefined {
        if (this.heap.length === 0) {
            return undefined;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const max = this.heap[0];

        // Move last element to root
        this.heap[0] = this.heap.pop()!;

        // Restore heap property
        this.bubbleDown();

        return max;
    }

    // Return the maximum value without removing it
    peek(): number | undefined {
        return this.heap[0];
    }

    //number of elements in the MaxHeap
    size(): number {
        return this.heap.length;
    }

    // Check if the MaxHeap is empty
    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    // Print the elements of the MaxHeap
    print(): void {
        console.log(this.heap);
    }
}