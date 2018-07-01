## sort-algorithms-js
[![build:?](https://travis-ci.org/eyas-ranjous/sort-algorithms-js.svg?branch=master)](https://travis-ci.org/eyas-ranjous/sort-algorithms-js) [![npm](https://img.shields.io/npm/dm/sort-algorithms-js.svg)](https://www.npmjs.com/package/sort-algorithms-js) [![npm](https://img.shields.io/npm/v/sort-algorithms-js.svg)](https://www.npmjs.com/package/sort-algorithms-js) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/sort-algorithms-js) 

### Algorithms
- Bubble Sort
- Selection Sort
- Insertion Sort
- Radix Sort (numbers only)
- Heap Sort
- Quick Sort
- Merge Sort

### Install
```
npm install sort-algorithms-js
```

### Usage
All algorithms return a sorted list **without mutating** the original list
```js
const sorter = require('sort-algorithms-js');

// OR require a specific algorithm

const { mergeSort } = require('sort-algorithms-js');

const { bubbleSort, quickSort } = require('sort-algorithms-js');
```

**Examples**

```js
const list = [1, 0, 3, -5];

console.log(sorter.bubbleSort(list)); // [-5, 0, 1, 3]
console.log(list); // [1, 0, 3, -5]

// selection sort
console.log(sorter.selectionSort(list)); // [-5, 0, 1, 3]
console.log(list); // [1, 0, 3, -5]

// Insertion sort
console.log(sorter.insertionSort(list)); // [-5, 0, 1, 3]
console.log(list); // [1, 0, 3, -5]

// Radix sort
console.log(sorter.radixSort(list)); // [-5, 0, 1, 3]
console.log(list); // [1, 0, 3, -5]

// heap sort
console.log(sorter.heapSort(list)); // [-5, 0, 1, 3]
console.log(list); // [1, 0, 3, -5]

// quick sort
console.log(sorter.quickSort(list)); // [-5, 0, 1, 3]
console.log(list); // [1, 0, 3, -5]

// merge sort
console.log(sorter.mergeSort(list)); // [-5, 0, 1, 3]
console.log(list); // [1, 0, 3, -5]
```

## Build
```
grunt build
```

### License
The MIT License. Full License is [here](https://github.com/eyas-ranjous/sort-algorithms-js/blob/master/LICENSE)