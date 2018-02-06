## sort-algorithms-js
[![build:?](https://travis-ci.org/eyas-ranjous/sort-algorithms-js.svg?branch=master)](https://travis-ci.org/eyas-ranjous/sort-algorithms-js) [![npm](https://img.shields.io/npm/v/sort-algorithms-js.svg)](https://www.npmjs.com/package/sort-algorithms-js) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/sort-algorithms-js) 

### Algorithms
- Bubble Sort
- Selection Sort
- Insertion Sort
- Heap Sort
- Quick Sort
- Merge Sort


### Install
```
npm install sort-algorithms-js
```

### Usage
* All algorithms mutates the original array except **merge sort**
* to avoid mutation of the original array for a mutation algorithm, sort a copy of the array
* All algorithms returns the sorted array

**Examples**

```javascript
var sorter = require('sort-algorithms-js');

let a = [1, 0, 3, -5];

let sorted = sorter.bubbleSort(a);
console.log(a); // [-5, 0, 1, 3]
console.log(sorted); // [-5, 0, 1, 3]

// selection sort
let sortedArray = sorter.selectionSort(a);

// Insertion sort
let sortedArray = sorter.insertionSort(a);

// heap sort
let sortedArray = sorter.heapSort(a);

// quick sort
let sortedArray = sorter.quickSort(a);

// merge sort
let sortedArray = sorter.mergeSort(a); // does not mutate a
```

## Lint
```
grunt lint
```

## Test
```
grunt test
```

## Coverage
```
grunt coverage
```

## Build
All tasks
```
grunt build
```

### License
The MIT License. Full License is [here](https://github.com/eyas-ranjous/sort-algorithms-js/blob/master/LICENSE)