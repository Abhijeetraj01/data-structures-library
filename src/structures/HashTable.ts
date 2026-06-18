import { LinkedList } from "./LinkedList";

export class HashTable<Key extends string, Value> {
    private buckets: Array<LinkedList<[Key, Value]>>;
    private capacity: number;
    private length: number;
    
    constructor(capacity: number = 10) {            //default capacity is 10
        this.capacity = capacity;
        this.length = 0;
        this.buckets = [];
        for (let i = 0; i < capacity; i++) {
            this.buckets.push(new LinkedList<[Key, Value]>());
        }
    }

    //hash function to convert a key into an index
    private hash(key: Key): number {    //
        let sum = 0;

        for (let i = 0; i < key.length; i++) {
            sum += key.charCodeAt(i);
        }
        return sum % this.capacity;
    }

    //add a key-value pair to the hash table
    set(key: Key, value: Value): void {
        const index = this.hash(key);

        const bucket = this.buckets[index];

        const entries = bucket.toArray();

        for (let i = 0; i < entries.length; i++) {
            if (entries[i][0] === key) {
                bucket.set(i, [key, value]);
                return;
            }
        }

        bucket.append([key, value]);
        this.length++;
    }

    //return the value associated with a key
    get(key: Key): Value | undefined {
        const index = this.hash(key);

        const bucket = this.buckets[index];

        const entries = bucket.toArray();

        for (const [storedKey, storedValue] of entries) {
            if (storedKey === key) {
                return storedValue;
            }
        }
        return undefined;
    }
    
    //check if a key exists in the hash table
    has(key: Key): boolean {
        return this.get(key) !== undefined;
    }

    //return the number of key-value pairs in the hash table
    size(): number {
        return this.length;
    }

    //remove a key-value pair from the hash table
    remove(key: Key): boolean {
        const index = this.hash(key);

        const bucket = this.buckets[index];

        const entries = bucket.toArray();

        for (let i = 0; i < entries.length; i++) {
            if (entries[i][0] === key) {
                bucket.remove(i);
                this.length--;
                return true;
            }
        }

        return false;
    }

    //print the hash table
    print(): void {
        for (let i = 0; i < this.capacity; i++) {
            console.log(
                `Bucket ${i}:`,
                this.buckets[i].toArray()
            );
        }
    }
}
