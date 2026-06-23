class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;

    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

export class Trie {
    private root: TrieNode;
    private wordCount: number;

    constructor() {
        this.root = new TrieNode();
        this.wordCount = 0;
    }

    //insert a word into the trie
    insert(word: string): void {
        let current = this.root;

        for (const char of word) {
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode());
            }

            current = current.children.get(char)!;
        }

        if (!current.isEndOfWord) {
            current.isEndOfWord = true;
            this.wordCount++;
        }
    }

    //check if a complete word exists in the trie
    search(word: string): boolean {
        const node = this.findNode(word);
        return node !== null && node.isEndOfWord;
    }

        //check if trie contain string
    contains(word: string): boolean {
        return this.search(word);
    }

    //check if any word starts with the prefix
    startsWith(prefix: string): boolean {
        return this.findNode(prefix) !== null;
    }

    //remove a word from the trie
    delete(word: string): boolean {
        if (!this.search(word)) {
            return false;
        }

        this.deleteHelper(this.root, word, 0);
        this.wordCount--;
        return true;
    }

    remove(word: string): boolean {
        return this.delete(word);
    }

    //return all words that start with the prefix
    wordsWithPrefix(prefix: string): string[] {
        const node = this.findNode(prefix);

        if (node === null) {
            return [];
        }

        const words: string[] = [];
        this.collectWords(node, prefix, words);
        return words;
    }

    //return the number of words stored in the trie
    size(): number {
        return this.wordCount;
    }

    //check if trie is empty
    isEmpty(): boolean {
        return this.wordCount === 0;
    }

    //remove all words from the trie
    clear(): void {
        this.root = new TrieNode();
        this.wordCount = 0;
    }

    private findNode(prefix: string): TrieNode | null {
        let current = this.root;

        for (const char of prefix) {
            const next = current.children.get(char);

            if (next === undefined) {
                return null;
            }

            current = next;
        }

        return current;
    }

    private deleteHelper(
        node: TrieNode,
        word: string,
        index: number
    ): boolean {
        if (index === word.length) {
            node.isEndOfWord = false;
            return node.children.size === 0;
        }

        const char = word[index]!;
        const child = node.children.get(char);

        if (child === undefined) {
            return false;
        }

        const shouldDeleteChild = this.deleteHelper(
            child,
            word,
            index + 1
        );

        if (shouldDeleteChild) {
            node.children.delete(char);
        }

        return !node.isEndOfWord && node.children.size === 0;
    }

    private collectWords(
        node: TrieNode,
        prefix: string,
        words: string[]
    ): void {
        if (node.isEndOfWord) {
            words.push(prefix);
        }

        for (const [char, child] of node.children) {
            this.collectWords(child, prefix + char, words);
        }
    }

    getAllWords(): string[] {
        const words: string[] = [];

        this.collectWords(
            this.root,
            "",
            words
        );

        return words;
    }
}
