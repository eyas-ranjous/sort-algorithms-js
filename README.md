## sort-algorithms-js
[![build:?](https://travis-ci.org/eyas-ranjous/sort-algorithms-js.svg?branch=master)](https://travis-ci.org/eyas-ranjous/sort-algorithms-js) [![npm](https://img.shields.io/npm/v/sort-algorithms-js.svg)](https://www.npmjs.com/package/sort-algorithms-js)

Sort algorithms implementation in javascript. Each algorithm sorts an array of numbers of strings.

### Implemented algorithms
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
```javascript
var sorter = require('sort-algorithms-js');

// sort an array
var a = [1, 0, 3, -5];
sorter.bubbleSort(a);
console.log(a); // [-5, 0, 1, 3]

// we can sort a copy of the array to keep the original
var b = ['y', 'aaa', 'zm', 'w'];
var sortedB = sorter.bubbleSort(b.slice(0));
console.log(b); // ['y', 'aaa', 'zm', 'w']
console.log(sortedB); // ['aaa', 'w', 'y' 'zm']

// selection sort
sorter.selectionSort(a);

// Insertion sort
sorter.insertionSort(a);

// heap sort
sorter.heapSort(a);

// quick sort
sorter.quickSort(a);

// merge sort
sorter.mergeSort(a);
```

### Lint
```
npm run build
```


### Test
```
npm run test
```


### License
The MIT License. Full License is [here](https://github.com/eyas-ranjous/sort-algorithms-js/blob/master/LICENSE)