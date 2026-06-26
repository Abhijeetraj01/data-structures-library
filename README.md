# 📚 DS Library

![Build](https://github.com/Abhijeetraj01/dsalibrary/actions/workflows/build.yml/badge.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript\&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)
![Data Structures](https://img.shields.io/badge/Data%20Structures-10+-blue)
![Algorithms](https://img.shields.io/badge/Algorithms-20+-orange)

A comprehensive **Data Structures and Algorithms Library** built from scratch using **TypeScript**.

This project focuses on implementing classic data structures and algorithms with clean, readable code and well-organized project structure. It is intended for:

* 📖 Learning Data Structures & Algorithms
* 💼 Technical Interview Preparation
* 🚀 Open Source Contribution
* 🧠 Competitive Programming Fundamentals

---

# ✨ Features

* Built entirely in **TypeScript**
* Implemented completely from scratch
* Clean and modular folder structure
* Generic implementations where applicable
* Interview-friendly code
* Well documented and easy to understand
* Covers fundamental Data Structures and Algorithms

---

# 📁 Project Structure

```text
src/
├── algorithms/
│   ├── dynamic-programming/
│   ├── graph/
│   ├── math/
│   ├── searching/
│   └── sorting/
│
├── structures/
│
└── index.ts
```

---

# 📦 Installation

Clone the repository:

```bash
git clone https://github.com/Abhijeetraj01/dsalibrary.git
```

Move into the project:

```bash
cd dsalibrary
```

Install dependencies:

```bash
npm install
```

Compile the project:

```bash
npm run build
```

---

install the package:

```bash
npm install dsalibrary
```

# 🚀 Usage

```typescript
import { Stack } from "./src";

const stack = new Stack<number>();

stack.push(10);
stack.push(20);

console.log(stack.pop());
```

---

# 🏗️ Implemented Data Structures

| Data Structure                  | Status |
| ------------------------------- | :----: |
| Stack                           |    ✅   |
| Queue                           |    ✅   |
| Linked List                     |    ✅   |
| Hash Table                      |    ✅   |
| Binary Search Tree              |    ✅   |
| AVL Tree                        |    ✅   |
| Max Heap                        |    ✅   |
| Graph                           |    ✅   |
| Trie                            |    ✅   |
| Union Find (Disjoint Set Union) |    ✅   |

---

# ⚙️ Implemented Algorithms

## Sorting

* Bubble Sort
* Selection Sort
* Insertion Sort
* Merge Sort
* Quick Sort
* Heap Sort

---

## Searching

* Linear Search
* Binary Search
* Recursive Binary Search

---

## Graph Algorithms

* Dijkstra's Algorithm
* Optimized Dijkstra (Priority Queue)
* Topological Sort
* Kruskal's Algorithm
* Prim's Algorithm

---

## Mathematical Algorithms

* Greatest Common Divisor (GCD)
* Least Common Multiple (LCM)
* Sieve of Eratosthenes
* Fast Exponentiation (Binary Exponentiation)
* Modular Arithmetic
* Extended Euclidean Algorithm
* Modular Inverse
* Euler's Totient Function

---

## Dynamic Programming

---

# 📊 Time Complexity

## Data Structures

| Structure          | Search       | Insert       | Delete       |
| ------------------ | ------------ | ------------ | ------------ |
| Stack              | O(n)         | O(1)         | O(1)         |
| Queue              | O(n)         | O(1)         | O(1)         |
| Linked List        | O(n)         | O(1)*        | O(n)         |
| Hash Table         | O(1) Average | O(1) Average | O(1) Average |
| Binary Search Tree | O(log n)**   | O(log n)**   | O(log n)**   |
| AVL Tree           | O(log n)     | O(log n)     | O(log n)     |
| Trie               | O(m)         | O(m)         | O(m)         |
| Heap               | O(n)         | O(log n)     | O(log n)     |

> ***** Insertion at the head or when the insertion point is already known.
> ****** Average case. Worst case is **O(n)**.

---

## Sorting Algorithms

| Algorithm      | Best       | Average    | Worst      | Space    |
| -------------- | ---------- | ---------- | ---------- | -------- |
| Bubble Sort    | O(n)       | O(n²)      | O(n²)      | O(1)     |
| Selection Sort | O(n²)      | O(n²)      | O(n²)      | O(1)     |
| Insertion Sort | O(n)       | O(n²)      | O(n²)      | O(1)     |
| Merge Sort     | O(n log n) | O(n log n) | O(n log n) | O(n)     |
| Quick Sort     | O(n log n) | O(n log n) | O(n²)      | O(log n) |
| Heap Sort      | O(n log n) | O(n log n) | O(n log n) | O(1)     |

---

# 🎯 Learning Roadmap

* [x] Data Structures
* [x] Sorting Algorithms
* [x] Searching Algorithms
* [x] Graph Algorithms
* [x] Mathematical Algorithms
* [ ] Dynamic Programming
* [ ] Greedy Algorithms
* [ ] Backtracking
* [ ] String Algorithms

---

# 🤝 Contributing

Contributions are welcome.

If you find a bug, have an improvement, or would like to add another algorithm or data structure, feel free to open an issue or submit a pull request.

---

# 📄 License

This project is licensed under the **MIT License**.
