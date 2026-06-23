import { Trie } from "./structures/trie";
const trie = new Trie();

trie.insert("cat");
trie.insert("car");
trie.insert("care");
trie.insert("dog");

console.log(trie.search("cat"));
console.log(trie.search("ca"));

console.log(trie.startsWith("ca"));

console.log(trie.wordsWithPrefix("ca"));

console.log(trie.size());

trie.delete("care");

console.log(trie.search("care"));
console.log(trie.search("car"));

console.log(trie.getAllWords());