# sort-algorithms-js

[![npm](https://img.shields.io/npm/v/sort-algorithms-js.svg)](https://www.npmjs.com/package/sort-algorithms-js) [![npm](https://img.shields.io/npm/dm/sort-algorithms-js.svg)](https://www.npmjs.com/package/sort-algorithms-js)

A lightweight JavaScript library that provides multiple sorting algorithms with a unified API. You can optionally pass a **compare callback** similar to JavaScript’s native `Array.sort`.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [require](#require)
  - [import](#import)
- [API](#api)
  - [bubbleSort](#bubblesort)
  - [insertionSort](#insertionsort)
  - [selectionSort](#selectionsort)
  - [radixSort](#radixsort)
  - [heapSort](#heapsort)
  - [mergeSort](#mergesort)
  - [quickSort](#quicksort)
- [Build](#build)
- [Benchmarking](#benchmarking)
- [License](#license)

## Features

- **Multiple Sorting Algorithms**: bubble sort, insertion sort, selection sort, radix sort, heap sort, merge sort, quick sort
- **Custom Compare Function**: `(a, b) => number` for ascending/descending or complex data
- **Benchmarks** for each algorithm (Node v14)
- **Zero Dependencies**
- **Works in Node.js v6+**

## Installation

```bash
npm install --save sort-algorithms-js
```

## Usage

### require

```js
const {
  bubbleSort,
  insertionSort,
  selectionSort,
  radixSort,
  mergeSort,
  heapSort,
  quickSort
} = require('sort-algorithms-js');

const arr = [2, 1, 7, 3, 9, -1, -5];
console.log(bubbleSort(arr)); // [ -5, -1, 1, 2, 3, 7, 9 ]

// with a compare function for descending
console.log(insertionSort(arr, (a, b) => b - a)); // [ 9, 7, 3, 2, 1, -1, -5 ]
```

### import

```js
import {
  bubbleSort,
  insertionSort,
  selectionSort,
  radixSort,
  mergeSort,
  heapSort,
  quickSort
} from 'sort-algorithms-js';

const arr = [2, 1, 7, 3, 9, -1, -5];
console.log(quickSort(arr)); // [ -5, -1, 1, 2, 3, 7, 9 ]
```

## API

Each function sorts an array **in-place** and returns the same array.\
**Signature**:

```ts
function algorithmName<T>(
  list: T[],
  compare?: (a: T, b: T) => number
): T[];
```

- `list`: The array to sort.
- `compare`: An optional function that returns `>0` if `a>b`, `<0` if `a<b`, or `0` if equal.

### bubbleSort

- **Time Complexity**: O(n²)

```js
bubbleSort([2, 1, 7, 3, 9, -1, -5]);
bubbleSort([2, 1, 7, 3, 9, -1, -5], (a, b) => b - a);
```

**Benchmark (Node v14)**

| input size | best time | worst time |
| ---------- | --------- | ---------- |
| 1k         | 0s 5ms    | 0s 9ms     |
| 10k        | 0s 227ms  | 0s 249ms   |
| 50k        | 6s 411ms  | 7s 998ms   |
| 100k       | 26s 653ms | 29s 735ms  |
| 1M         | ❌         | ❌          |


### insertionSort

- **Time Complexity**: O(n²)

```js
insertionSort([2, 1, 7, 3, 9, -1, -5]);
insertionSort([2, 1, 7, 3, 9, -1, -5], (a, b) => b - a);
```

**Benchmark (Node v14)**

| input size | best time | worst time |
| ---------- | --------- | ---------- |
| 1k         | 0s 5ms    | 0s 10ms    |
| 10k        | 0s 129ms  | 0s 145ms   |
| 50k        | 3s 49ms   | 3s 596ms   |
| 100k       | 13s 575ms | 16s 876ms  |
| 1M         | ❌         | ❌          |

### selectionSort

- **Time Complexity**: O(n²)

```js
selectionSort([2, 1, 7, 3, 9, -1, -5]);
selectionSort([2, 1, 7, 3, 9, -1, -5], (a, b) => b - a);
```

**Benchmark (Node v14)**

| input size | best time | worst time |
| ---------- | --------- | ---------- |
| 1k         | 0s 4ms    | 0s 8ms     |
| 10k        | 0s 125ms  | 0s 139ms   |
| 50k        | 2s 178ms  | 2s 302ms   |
| 100k       | 9s 740ms  | 10s 460ms  |
| 1M         | ❌         | ❌          |

### radixSort

Only sorts numeric data.

- **Time Complexity**: O(n × d)

```js
// ascending
radixSort([2, 1, 7, 3, 9, -1, -5]);

// descending
radixSort([2, 1, 7, 3, 9, -1, -5], 'desc');

// custom numeric extraction
radixSort([{ id: 341 }, { id: 947 }, { id: 132 }], 'asc', (obj) => obj.id);
```

**Benchmark (Node v14)**

| input size | best time | worst time |
| ---------- | --------- | ---------- |
| 10k        | 0s 21ms   | 0s 30ms    |
| 50k        | 0s 61ms   | 0s 81ms    |
| 100k       | 0s 97ms   | 0s 115ms   |
| 1M         | 1s 27ms   | 1s 103ms   |
| 10M        | 13s 844ms | 17s 257ms  |
| 50M        | ❌         | ❌          |

### heapSort

- **Time Complexity**: O(n log n)

```js
heapSort([2, 1, 7, 3, 9, -1, -5]);
heapSort([2, 1, 7, 3, 9, -1, -5], (a, b) => b - a);
```

**Benchmark (Node v14)**

| input size | best time | worst time |
| ---------- | --------- | ---------- |
| 10k        | 0s 12ms   | 0s 14ms    |
| 50k        | 0s 21ms   | 0s 25ms    |
| 100k       | 0s 31ms   | 0s 44ms    |
| 1M         | 0s 283ms  | 0s 313ms   |
| 10M        | 5s 219ms  | 6s 367ms   |
| 50M        | 34s 21ms  | 46s 167ms  |
| 100M       | 76s 485ms | 87s 991ms  |

### mergeSort

- **Time Complexity**: O(n log n)

```js
mergeSort([2, 1, 7, 3, 9, -1, -5]);
mergeSort([2, 1, 7, 3, 9, -1, -5], (a, b) => b - a);
```

**Benchmark (Node v14)**

| input size | best time | worst time |
| ---------- | --------- | ---------- |
| 10k        | 0s 16ms   | 0s 23ms    |
| 50k        | 0s 38ms   | 0s 45ms    |
| 100k       | 0s 54ms   | 0s 60ms    |
| 1M         | 0s 413ms  | 0s 435ms   |
| 10M        | 5s 78ms   | 6s 712ms   |
| 50M        | 33s 229ms | 35s 659ms  |
| 100M       | 82s 777ms | 86s 194ms  |

### quickSort

- **Time Complexity**: O(n log n) (average)

```js
quickSort([2, 1, 7, 3, 9, -1, -5]);
quickSort([2, 1, 7, 3, 9, -1, -5], (a, b) => b - a);
```

**Benchmark (Node v14)**

| input size | best time | worst time |
| ---------- | --------- | ---------- |
| 10k        | 0s 6ms    | 0s 13ms    |
| 50k        | 0s 18ms   | 0s 26ms    |
| 100k       | 0s 26ms   | 0s 34ms    |
| 1M         | 0s 167ms  | 0s 187ms   |
| 10M        | 1s 831ms  | 2s 188ms   |
| 50M        | 10s 402ms | 14s 777ms  |
| 100M       | 24s 253ms | 34s 705ms  |

## Build

```bash
grunt build
```

## Benchmarking

If you’d like to benchmark a specific sorting algorithm on random data, use the included `benchmark.js` script:

```bash
node test/benchmark.js \
  --size 100000 \
  --algorithm heapSort \
  --iterations 5
```

- ``: The size of the randomly generated array.
- ``: One of the supported algorithms (e.g., `bubbleSort`, `quickSort`, `heapSort`, etc.).
- `` *(optional)*: How many times to repeat the test.

**Example Output**:

```
heapSort: 0 seconds 51 ms
heapSort: 0 seconds 44 ms
heapSort: 0 seconds 52 ms
```

This script creates a random array of the specified size, times the sorting operation (using [timer-node](https://www.npmjs.com/package/timer-node)), and repeats that process for a given number of iterations. It’s a quick way to compare the relative performance of different sorting algorithms on your machine.

## License

[MIT License](https://github.com/eyas-ranjous/sort-algorithms-js/blob/master/LICENSE)
