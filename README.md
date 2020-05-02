<img width="400" alt="aljs" src="https://user-images.githubusercontent.com/6517308/80581008-1a8ff180-89d2-11ea-9126-25e91a00da6d.png">

[![build:?](https://travis-ci.org/eyas-ranjous/sort-algorithms-js.svg?branch=master)](https://travis-ci.org/eyas-ranjous/sort-algorithms-js) [![npm](https://img.shields.io/npm/dm/sort-algorithms-js.svg)](https://www.npmjs.com/package/sort-algorithms-js) [![npm](https://img.shields.io/npm/v/sort-algorithms-js.svg)](https://www.npmjs.com/package/sort-algorithms-js) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/sort-algorithms-js)

Sort Algorithms implementation in javascript with ability to use a comparison callback similar to javascript `.sort`.

<img width="782" alt="sa" src="https://user-images.githubusercontent.com/6517308/80630484-e93b1400-8a19-11ea-836f-58594fc7b1d1.png">

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
  * [benchmark](#benchmark) ⭐
 * [Build](#build)
 * [Contribution](#contribution) 🤝
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

##### asc

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

##### asc

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

##### asc

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
I built a small cmd tool to generate a benchmark for each algorithm on a randomly generated list of numbers.

it takes 3 options:

- `-s` for the size of the list
- `-a` for the algorithm name
- `-i` the number of iterations. default is 1.  

To try it, first install dev deps.

```sh
npm install
```

then, run it for an n randomly generated numbers with the targeted algorithm and an optional number of iterations.

Example

```sh
node test/benchmark.js -s 1000 -a bubbleSort -i 5
```

```
bubbleSort: 0 seconds 28 ms
bubbleSort: 0 seconds 32 ms
bubbleSort: 0 seconds 17 ms
bubbleSort: 0 seconds 13 ms
bubbleSort: 0 seconds 14 ms
```

I also generated a benchmark of a larger samples in Node v12, with 10 iterations for each algorithm. Each iteration re-generates a list of numbers with size s.

```sh
node test/benchmark.js -s [s] -a [name] -i 10
```

and I took the best and worst recorded time of each 10 iterations. the result was:

<table>
  <tr><td colspan="3" align="center"><b>10k numbers</b></td></tr>
  <tr><td align="center"><b>algorithm</b></td><td align="center"><b>best time</b></td><td align="center"><b>worst time</b></td></tr>
  <tr><td>quick sort</td><td>0 seconds 2 ms</td><td>0 seconds 11 ms</td></tr>
  <tr><td>javascript .sort()</td><td>0 seconds 4 ms</td><td>0 seconds 13 ms</td></tr>
  <tr><td>merge sort</td><td>0 seconds 3 ms</td><td>0 seconds 20 ms</td></tr>
  <tr><td>radix sort</td><td>0 seconds 3 ms</td><td>0 seconds 44 ms</td></tr>
  <tr><td>selection sort</td><td>5 seconds 316 ms</td><td>14 seconds 836 ms</td></tr>
  <tr><td>insertion sort</td><td>4 seconds 397 ms</td><td>15 seconds 918 ms</td></tr>
  <tr><td>bubble sort</td><td>7 seconds 304 ms</td><td>20 seconds 666 ms</td></tr>
  <tr><td colspan="3" align="center"><b>50k numbers</b></td></tr>
  <tr><td align="center"><b>algorithm</b></td><td align="center"><b>best time</b></td><td align="center"><b>worst time</b></td></tr>
  <tr><td>javascript .sort()</td><td>0 seconds 18 ms</td><td>0 seconds 22 ms</td></tr>
  <tr><td>quick sort</td><td>0 seconds 13 ms</td><td>0 seconds 27 ms</td></tr>
  <tr><td>merge sort</td><td>0 seconds 19 ms</td><td>0 seconds 48 ms</td></tr>
  <tr><td>radix sort</td><td>0 seconds 40 ms</td><td>0 seconds 84 ms</td></tr>
  <tr><td>selection sort</td><td>5 seconds 316 ms</td><td>14 seconds 836 ms</td></tr>
  <tr><td>insertion sort</td><td>4 seconds 397 ms</td><td>15 seconds 918 ms</td></tr>
  <tr><td>bubble sort</td><td>7 seconds 304 ms</td><td>20 seconds 666 ms</td></tr>
  <tr><td colspan="3" align="center"><b>100k numbers</b></td></tr>
  <tr><td align="center"><b>algorithm</b></td><td align="center"><b>best time</b></td><td align="center"><b>worst time</b></td></tr>
  <tr><td>quick sort</td><td>0 seconds 29 ms</td><td>0 seconds 40 ms</td></tr>
  <tr><td>javascript .sort()</td><td>0 seconds 41 ms</td><td>0 seconds 46 ms</td></tr>
  <tr><td>merge sort</td><td>0 seconds 43 ms</td><td>0 seconds 74 ms</td></tr>
  <tr><td>radix sort</td><td>0 seconds 84 ms</td><td>0 seconds 124 ms</td></tr>
  <tr><td>selection sort</td><td>11 seconds 604 ms</td><td>63 seconds 19 ms</td></tr>
  <tr><td>insertion sort</td><td>19 seconds 370 ms</td><td>70 seconds 463 ms</td></tr>
  <tr><td>bubble sort</td><td>33 seconds 793 ms</td><td>80 seconds 753 ms</td></tr>
  <tr><td colspan="3" align="center"><b>1 million numbers</b></td></tr>
  <tr><td align="center"><b>algorithm</b></td><td align="center"><b>best time</b></td><td align="center"><b>worst time</b></td></tr>
  <tr><td>quick sort</td><td>0 seconds 203 ms</td><td>0 seconds 440 ms</td></tr>
  <tr><td>javascript .sort()</td><td>0 seconds 598 ms</td><td>1 seconds 23 ms</td></tr>
  <tr><td>merge sort</td><td>0 seconds 674 ms</td><td>1 seconds 205 ms</td></tr>
  <tr><td>heap sort</td><td>0 seconds 728 ms</td><td>1 seconds 379 ms</td></tr>
  <tr><td>radix sort</td><td>1 seconds 117 ms</td><td>1 seconds 493 ms</td></tr>
  <tr><td colspan="3" align="center"><b>10 million numbers</b></td></tr>
  <tr><td align="center"><b>algorithm</b></td><td align="center"><b>best time</b></td><td align="center"><b>worst time</b></td></tr>
  <tr><td>javascript .sort()</td><td>6 seconds 656 ms</td><td>8 seconds 226 ms</td></tr>
  <tr><td>quick sort</td><td>2 seconds 212 ms</td><td>11 seconds 236 ms</td></tr>
  <tr><td>merge sort</td><td>6 seconds 795 ms</td><td>12 seconds 164 ms</td></tr>
  <tr><td>heap sort</td><td>5 seconds 194 ms</td><td>17 seconds 663 ms</td></tr>
  <tr><td>radix sort</td><td>18 seconds 134 ms</td><td>27 seconds 387 ms</td></tr>
  <tr><td colspan="3" align="center"><b>50 million numbers</b></td></tr>
  <tr><td align="center"><b>algorithm</b></td><td align="center"><b>best time</b></td><td align="center"><b>worst time</b></td></tr>
  <tr><td>javascript .sort()</td><td>38 seconds 83 ms</td><td>41 seconds 859 ms</td></tr>
  <tr><td>heap sort</td><td>34 seconds 950 ms</td><td>48 seconds 458 ms</td></tr>
  <tr><td>merge sort</td><td>36 seconds 718 ms</td><td>49 seconds 947 ms</td></tr>
  <tr><td>quick sort</td><td>12 seconds 641 ms</td><td>54 seconds 845 ms</td></tr>
  <tr><td>radix sort</td><td colspan="2"><i>❌ JavaScript heap out of memory</i></td></tr>
  <tr><td colspan="3" align="center"><b>100 million numbers</b></td></tr>
  <tr><td align="center"><b>algorithm</b></td><td align="center"><b>best time</b></td><td align="center"><b>worst time</b></td></tr>
  <tr><td>quick sort</td><td>24 seconds 689 ms</td><td>28 seconds 106 ms</td></tr>
  <tr><td>heap sort</td><td>79 seconds 480 ms</td><td>97 seconds 688 ms</td></tr>
  <tr><td>javascript .sort()</td><td colspan="2"><i>❌ JavaScript heap out of memory</i></td></tr>
  <tr><td>merge sort</td><td colspan="2"><i>❌ JavaScript heap out of memory</i></td></tr>
  <tr><td>radix sort</td><td colspan="2"><i>❌ JavaScript heap out of memory</i></td></tr>
</table>


## Build
```
grunt build
```

## Contribution
If you'd like to contribute to the project to improve the existing algorithms or implement new ones, feel free to fork the repo in your github and push your code. It just needs to be consistent with the existing code structure and style, as well as tests and README. Once done, please open a PR from development branch. Thanks 🌠

## License
The MIT License. Full License is [here](https://github.com/eyas-ranjous/sort-algorithms-js/blob/master/LICENSE)
