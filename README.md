<img width="400" alt="aljs" src="https://user-images.githubusercontent.com/6517308/80581008-1a8ff180-89d2-11ea-9126-25e91a00da6d.png">

[![build:?](https://travis-ci.org/eyas-ranjous/sort-algorithms-js.svg?branch=master)](https://travis-ci.org/eyas-ranjous/sort-algorithms-js) [![npm](https://img.shields.io/npm/dm/sort-algorithms-js.svg)](https://www.npmjs.com/package/sort-algorithms-js) [![npm](https://img.shields.io/npm/v/sort-algorithms-js.svg)](https://www.npmjs.com/package/sort-algorithms-js) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/sort-algorithms-js)

Sort Algorithms implementation in javascript with ability to use a comparison callback similar to javascript `.sort`.

<img width="800" alt="sort" src="https://user-images.githubusercontent.com/6517308/80563817-bfe69d80-89b1-11ea-82a7-8d3a7ecddf19.png">

# Table of Contents
* [Install](#install)
* [API](#api)
  * [Implemented Algorithms](#implemented-algorithms)
  * [require](#require)
  * [import](#import)
  * [Examples](#examples)
    * [bubbleSort(list, compare)](#bubbleSortlist-compare)
    * [selectionSort(list, compare)](#selectionSortlist-compare)
    * [insertionSort(list, compare)](#insertionSortlist-compare)
    * [radixSort(list, order, getNumber)](#radixSortlist-order-getnumber)
    * [heapSort(list, compare)](#heapSortlist-compare)
    * [quickSort(list, compare)](#quickSortlist-compare)
    * [mergeSort(list, compare)](#mergeSortlist-compare)
  * [benchmark](#benchmark)
 * [Build](#build)
 * [License](#license)

## Implemented Algorithms

<table>
  <tr><th>algorithm</th><th>source</th></tr>
  <tr><td>Bubble Sort</td><td>https://en.wikipedia.org/wiki/Bubble_sort</td></tr>
  <tr><td>Selection Sort</td><td>https://en.wikipedia.org/wiki/Selection_sort</td></tr>
  <tr><td>Insertion Sort</td><td>https://en.wikipedia.org/wiki/Insertion_sort</td></tr>
  <tr><td>Radix Sort (numbers only)</td><td>https://en.wikipedia.org/wiki/Radix_sort</td></tr>
  <tr><td>Heap Sort</td><td>https://en.wikipedia.org/wiki/Heapsort</td></tr>
  <tr><td>Quick Sort</td><td>https://en.wikipedia.org/wiki/Quicksort</td></tr>
  <tr><td>Merge Sort</td><td>https://en.wikipedia.org/wiki/Merge_sort</td></tr>
</table>

## Install

```sh
npm install --save sort-algorithms-js
```

## API

### require

```js
const {
  bubbleSort,
  selectionSort,
  insertionSort,
  radixSort,
  heapSort,
  quickSort,
  mergeSort
} = require('sort-algorithms-js');
```

### import

```js
import {
  bubbleSort,
  selectionSort,
  insertionSort,
  radixSort,
  heapSort,
  quickSort,
  mergeSort
} from 'sort-algorithms-js';
```

### Examples
default order is ascending. all algorithms accept a comparison callback as the second param except radix sort which accepts the order as a string "asc" or "decs" and a second param callback to obtain a number value from an object.

```js
const numbers = [4, 1, 8, 6, -3, -1, 0, 7, -6, 9];

const strings = ['a', 'y', 'i', 'r', 'o', 'w', 'u', 'd', 'e', 'm'];

const objects = [
  { id: 4 }, { id: 1 }, { id: 8 }, { id: 6 }, { id: 3 },
  { id: 2 }, { id: 0 },{ id: 7 }, { id: 5 }, { id: 9 }
];
```

#### bubbleSort(list, compare)

##### asc

```js
console.log(bubbleSort(numbers));
// [-6, -3, -1, 0, 1, 4, 6, 7, 8, 9]

console.log(bubbleSort(strings));
// ['a', 'd', 'e', 'i', 'm', 'o', 'r', 'u', 'w', 'y']

console.log(bubbleSort(objects, (a, b) => a.id - b.id));
// [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }]
```

##### desc

```js
console.log(bubbleSort(numbers, (a, b) => b - a));
// [9, 8, 7, 6, 4, 1, 0, -1, -3, -6]

console.log(bubbleSort(strings, (a, b) => a < b ? 1 : -1));
// ['y', 'w', 'u', 'r', 'o', 'm', 'i', 'e', 'd', 'a']

console.log(bubbleSort(objects, (a, b) => b.id - a.id));
// [{ id: 9 }, { id: 8 }, { id: 7 }, { id: 6 }, { id: 5 }, { id: 4 }, { id: 3 }, { id: 2 }, { id: 1 }, { id: 0 }]
```

#### selectionSort(list, compare)

##### asc

```js
console.log(selectionSort(numbers));
// [-6, -3, -1, 0, 1, 4, 6, 7, 8, 9]

console.log(selectionSort(strings));
// ['a', 'd', 'e', 'i', 'm', 'o', 'r', 'u', 'w', 'y']

console.log(selectionSort(objects, (a, b) => a.id - b.id));
// [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }]
```

##### desc

```js
console.log(selectionSort(numbers, (a, b) => b - a));
// [9, 8, 7, 6, 4, 1, 0, -1, -3, -6]

console.log(selectionSort(strings, (a, b) => a < b ? 1 : -1));
// ['y', 'w', 'u', 'r', 'o', 'm', 'i', 'e', 'd', 'a']

console.log(selectionSort(objects, (a, b) => b.id - a.id));
// [{ id: 9 }, { id: 8 }, { id: 7 }, { id: 6 }, { id: 5 }, { id: 4 }, { id: 3 }, { id: 2 }, { id: 1 }, { id: 0 }]
```

#### insertionSort(list, compare)

##### asc

```js
console.log(insertionSort(numbers));
// [-6, -3, -1, 0, 1, 4, 6, 7, 8, 9]

console.log(insertionSort(strings));
// ['a', 'd', 'e', 'i', 'm', 'o', 'r', 'u', 'w', 'y']

console.log(insertionSort(objects, (a, b) => a.id - b.id));
// [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }]
```

##### desc

```js
console.log(insertionSort(numbers, (a, b) => b - a));
// [9, 8, 7, 6, 4, 1, 0, -1, -3, -6]

console.log(insertionSort(strings, (a, b) => a < b ? 1 : -1));
// ['y', 'w', 'u', 'r', 'o', 'm', 'i', 'e', 'd', 'a']

console.log(insertionSort(objects, (a, b) => b.id - a.id));
// [{ id: 9 }, { id: 8 }, { id: 7 }, { id: 6 }, { id: 5 }, { id: 4 }, { id: 3 }, { id: 2 }, { id: 1 }, { id: 0 }]
```

#### radixSort(list, order, getNumber)

##### asc

```js
console.log(radixSort(numbers));
// [-6, -3, -1, 0, 1, 4, 6, 7, 8, 9]

console.log(radixSort(objects, 'asc', (a) => a.id));
// [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }]
```

##### desc

```js
console.log(radixSort(numbers, 'desc'));
// [9, 8, 7, 6, 4, 1, 0, -1, -3, -6]

console.log(radixSort(objects, 'desc', (a) => a.id));
// [{ id: 9 }, { id: 8 }, { id: 7 }, { id: 6 }, { id: 5 }, { id: 4 }, { id: 3 }, { id: 2 }, { id: 1 }, { id: 0 }]
```

#### heapSort(list, compare)

```js
console.log(heapSort(numbers));
// [-6, -3, -1, 0, 1, 4, 6, 7, 8, 9]

console.log(heapSort(strings));
// ['a', 'd', 'e', 'i', 'm', 'o', 'r', 'u', 'w', 'y']

console.log(heapSort(objects, (a, b) => a.id - b.id));
// [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }]
```

##### desc

```js
console.log(heapSort(numbers, (a, b) => b - a));
// [9, 8, 7, 6, 4, 1, 0, -1, -3, -6]

console.log(heapSort(strings, (a, b) => a < b ? 1 : -1));
// ['y', 'w', 'u', 'r', 'o', 'm', 'i', 'e', 'd', 'a']

console.log(heapSort(objects, (a, b) => b.id - a.id));
// [{ id: 9 }, { id: 8 }, { id: 7 }, { id: 6 }, { id: 5 }, { id: 4 }, { id: 3 }, { id: 2 }, { id: 1 }, { id: 0 }]
```

#### quickSort(list, compare)

```js
console.log(quickSort(numbers));
// [-6, -3, -1, 0, 1, 4, 6, 7, 8, 9]

console.log(quickSort(strings));
// ['a', 'd', 'e', 'i', 'm', 'o', 'r', 'u', 'w', 'y']

console.log(quickSort(objects, (a, b) => a.id - b.id));
// [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }]
```
##### desc

```js
console.log(quickSort(numbers, (a, b) => b - a));
// [9, 8, 7, 6, 4, 1, 0, -1, -3, -6]

console.log(quickSort(strings, (a, b) => a < b ? 1 : -1));
// ['y', 'w', 'u', 'r', 'o', 'm', 'i', 'e', 'd', 'a']

console.log(quickSort(objects, (a, b) => b.id - a.id));
// [{ id: 9 }, { id: 8 }, { id: 7 }, { id: 6 }, { id: 5 }, { id: 4 }, { id: 3 }, { id: 2 }, { id: 1 }, { id: 0 }]
```


#### mergeSort(list, compare)

```js
console.log(mergeSort(numbers));
// [-6, -3, -1, 0, 1, 4, 6, 7, 8, 9]

console.log(mergeSort(strings));
// ['a', 'd', 'e', 'i', 'm', 'o', 'r', 'u', 'w', 'y']

console.log(mergeSort(objects, (a, b) => a.id - b.id));
// [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }]
```

##### desc

```js
console.log(mergeSort(numbers, (a, b) => b - a));
// [9, 8, 7, 6, 4, 1, 0, -1, -3, -6]

console.log(mergeSort(strings, (a, b) => a < b ? 1 : -1));
// ['y', 'w', 'u', 'r', 'o', 'm', 'i', 'e', 'd', 'a']

console.log(mergeSort(objects, (a, b) => b.id - a.id));
// [{ id: 9 }, { id: 8 }, { id: 7 }, { id: 6 }, { id: 5 }, { id: 4 }, { id: 3 }, { id: 2 }, { id: 1 }, { id: 0 }]
```

### Benchmark
I built a small tool to generate a benchmark for the algorithms on a sample of numbers. you can use it in cmd:

first install dev deps.

```sh
npm install
```

then, run it for an n numbers with a comma-separated algorithms

Example

```sh
node test/benchmark.js -s 1000 -a bubbleSort,insertionSort,selectionSort
```

```
bubbleSort: 0 seconds 7 ms
insertionSort: 0 seconds 14 ms
selectionSort: 0 seconds 11 ms
```

I also generated a benchmark for larger samples in Node v12, the result was

<table>
  <tr><td colspan="2" align="center"><b>50k numbers</b></td></tr>
  <tr><td>bubble sort</td><td>5 seconds 557 ms</td></tr>
  <tr><td>selection sort</td><td>11 seconds 510 ms</td></tr>
  <tr><td>insertion sort</td><td>14 seconds 457 ms</td></tr>
  <tr><td colspan="2" align="center"><b>100k numbers</b></td></tr>
  <tr><td>bubble sort</td><td>25 seconds 348 ms</td></tr>
  <tr><td>selection sort</td><td>51 seconds 687 ms</td></tr>
  <tr><td>insertion sort</td><td>62 seconds 626 ms</td></tr>
  <tr><td colspan="2" align="center"><b>10 million numbers</b></td></tr>
  <tr><td>quick sort</td><td>2 seconds 574 ms</td></tr>
  <tr><td>heap sort</td><td>6 seconds 86 ms</td></tr>
  <tr><td>javascript .sort()</td><td>7 seconds 304 ms</td></tr>
  <tr><td>merge sort</td><td>7 seconds 598 ms</td></tr>
  <tr><td>radix sort</td><td>16 seconds 877 ms</td></tr>
  <tr><td colspan="2" align="center"><b>50 million numbers</b></td></tr>
  <tr><td colspan="2" align="center">node test/benchmark.js -s 50000000 -a quickSort,heapSort,sort</td></tr>
  <tr><td>quick sort</td><td>13 seconds 983 ms</td></tr>
  <tr><td>javascript sort</td><td>41 seconds 430 ms</td></tr>
  <tr><td>heap sort</td><td>48 seconds 787 ms</td></tr>
  <tr><td colspan="2" align="center"><b>100 million numbers</b></td></tr>
  <tr><td>quick sort</td><td>36 seconds 147 ms</td></tr>
</table>

## Build
```
grunt build
```

### License
The MIT License. Full License is [here](https://github.com/eyas-ranjous/sort-algorithms-js/blob/master/LICENSE)
