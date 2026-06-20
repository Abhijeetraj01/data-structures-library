import { MaxHeap } from './structures/MaxHeap';
const heap = new MaxHeap();

heap.insert(100);
heap.insert(90);
heap.insert(60);
heap.insert(80);
heap.insert(110);

heap.print();

console.log(heap.extractMax());

heap.print();

console.log(heap.peek());
console.log(heap.size());
console.log(heap.isEmpty());