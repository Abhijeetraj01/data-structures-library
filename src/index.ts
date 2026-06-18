import { HashTable } from "./structures/HashTable";

const table = new HashTable<string, number>();

table.set("abc", 1);
table.set("cab", 2);

console.log(table.get("abc"));
console.log(table.get("cab"));