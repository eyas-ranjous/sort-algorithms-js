<img width="320" alt="aljs" src="https://user-images.githubusercontent.com/6517308/80581008-1a8ff180-89d2-11ea-9126-25e91a00da6d.png">

[![npm](https://img.shields.io/npm/v/sort-algorithms-js.svg)](https://www.npmjs.com/package/sort-algorithms-js) [![npm](https://img.shields.io/npm/dm/sort-algorithms-js.svg)](https://www.npmjs.com/package/sort-algorithms-js) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/sort-algorithms-js)

soft algorithms implementation with ability to use a compare callback similar to javascript `.sort`.

## Contents
  * [Install](#install)
  * [require](#require)
  * [import](#import)
  * [API](#api)
    * [bubbleSort](#bubbleSort)
    * [insertioSort](#insertionSort)
    * [selectionSort](#selectionSort)
    * [radixSort](#radixSort)
    * [mergeSort](#mergeSort)
    * [heapSort](#heapSort)
    * [quickSort](#quickSort)
  * [Build](#build)
  * [License](#license)

### Install

```sh
npm install --save sort-algorithms-js
```

### require
```js
const {
  bubbleSort, selectionSort, insertionSort, radixSort,
  mergeSort, heapSort, quickSort
} = require('sort-algorithms-js');
```

### import
```js
import {
  bubbleSort, selectionSort, insertionSort, radixSort,
  mergeSort, heapSort, quickSort
} from 'sort-algorithms-js';
```

### API

#### bubbleSort
runtime complexity: O(n^2)

```js
bubbleSort([2, 1, 7, 3, 9, -1, -5]); // [ -5, -1, 1, 2, 3, 7, 9 ]
bubbleSort([2, 1, 7, 3, 9, -1, -5], (a, b) => b - a); // [ 9, 7, 3, 2, 1, -1, -5 ]
```

##### Benchmark
<table>
  <tr><td align="center" colspan="3">Node v14</td></tr>
  <tr><td align="center"><b>input size</b></td><td align="center"><b>best time</b></td><td align="center"><b>worst time</b></td></tr>
  <tr><td>1k</td><td>0 seconds 5 ms</td><td>0 seconds 9 ms</td></tr>
  <tr><td>10k</td><td>0 seconds 227 ms</td><td>0 seconds 249 ms</td></tr>
  <tr><td>50k</td><td>6 seconds 411 ms</td><td>7 seconds 998 ms</td></tr>
  <tr><td>100k</td><td>26 seconds 653 ms</td><td>29 seconds 735 ms</td></tr>
  <tr><td>1M</td><td align="center" colspan="2">❌</td></tr>
</table>

#### insertionSort
runtime complexity: O(n^2)

```js
insertionSort([2, 1, 7, 3, 9, -1, -5]); // [ -5, -1, 1, 2, 3, 7, 9 ]
insertionSort([2, 1, 7, 3, 9, -1, -5], (a, b) => b - a); // [ 9, 7, 3, 2, 1, -1, -5 ]
```

##### Benchmark
<table>
  <tr><td align="center" colspan="3">Node v14</td></tr>
  <tr><td align="center"><b>input size</b></td><td align="center"><b>best time</b></td><td align="center"><b>worst time</b></td></tr>
  <tr><td>1k</td><td>0 seconds 5 ms</td><td>0 seconds 10 ms</td></tr>
  <tr><td>10k</td><td>0 seconds 129 ms</td><td>0 seconds 145 ms</td></tr>
  <tr><td>50k</td><td>3 seconds 49 ms</td><td>3 seconds 596 ms</td></tr>
  <tr><td>100k</td><td>13 seconds 575 ms</td><td>16 seconds 876 ms</td></tr>
  <tr><td>1M</td><td align="center" colspan="2">❌</td></tr>
</table>

#### selectionSort
runtime complexity: O(n^2)

```js
selectionSort([2, 1, 7, 3, 9, -1, -5]); // [ -5, -1, 1, 2, 3, 7, 9 ]
selectionSort([2, 1, 7, 3, 9, -1, -5], (a, b) => b - a); // [ 9, 7, 3, 2, 1, -1, -5 ]
```

##### Benchmark
<table>
  <tr><td align="center" colspan="3">Node v14</td></tr>
  <tr><td align="center"><b>input size</b></td><td align="center"><b>best time</b></td><td align="center"><b>worst time</b></td></tr>
  <tr><td>1k</td><td>0 seconds 4 ms</td><td>0 seconds 8 ms</td></tr>
  <tr><td>10k</td><td>0 seconds 125 ms</td><td>0 seconds 139 ms</td></tr>
  <tr><td>50k</td><td>2 seconds 178 ms</td><td>2 seconds 302 ms</td></tr>
  <tr><td>100k</td><td>9 seconds 740 ms</td><td>10 seconds 460 ms</td></tr>
  <tr><td>1M</td><td align="center" colspan="2">❌</td></tr>
</table>

#### radixSort
Only sorts numbers in O(n*d) runtime : d is the number of digits in the largest number.

```js
radixSort([2, 1, 7, 3, 9, -1, -5]); // [ -5, -1, 1, 2, 3, 7, 9 ]
radixSort([2, 1, 7, 3, 9, -1, -5], 'desc'); // [ 9, 7, 3, 2, 1, -1, -5 ]
radixSort([{ id: 341 }, { id: 947 }, { id: 132 }], 'asc', (obj) => obj.id); // [ { id: 132 }, { id: 341 }, { id: 947 } ]
radixSort([{ id: 341 }, { id: 947 }, { id: 132 }], 'desc', (obj) => obj.id); // [ { id: 947 }, { id: 341 }, { id: 132 } ]
```

##### Benchmark
<table>
  <tr><td align="center" colspan="3">Node v14</td></tr>
  <tr><td align="center"><b>input size</b></td><td align="center"><b>best time</b></td><td align="center"><b>worst time</b></td></tr>
  <tr><td>10k</td><td>0 seconds 21 ms</td><td>0 seconds 30 ms</td></tr>
  <tr><td>50k</td><td>0 seconds 61 ms</td><td>0 seconds 81 ms</td></tr>
  <tr><td>100k</td><td>0 seconds 97 ms</td><td>0 seconds 115 ms</td></tr>
  <tr><td>1M</td><td>1 seconds 27 ms</td><td>1 seconds 103 ms</td></tr>
  <tr><td>10M</td><td>13 seconds 844 ms</td><td>17 seconds 257 ms</td></tr>
  <tr><td>50M</td><td align="center" colspan="2">❌</td></tr>
</table>

#### mergeSort
runtime complexity: O(n^2)

```js
mergeSort([2, 1, 7, 3, 9, -1, -5]); // [ -5, -1, 1, 2, 3, 7, 9 ]
mergeSort([2, 1, 7, 3, 9, -1, -5], (a, b) => b - a); // [ 9, 7, 3, 2, 1, -1, -5 ]
```

##### Benchmark
<table>
  <tr><td align="center" colspan="3">Node v14</td></tr>
  <tr><td align="center"><b>input size</b></td><td align="center"><b>best time</b></td><td align="center"><b>worst time</b></td></tr>
  <tr><td>10k</td><td>0 seconds 16 ms</td><td>0 seconds 23 ms</td></tr>
  <tr><td>50k</td><td>0 seconds 38 ms</td><td>0 seconds 45 ms</td></tr>
  <tr><td>100k</td><td>0 seconds 54 ms</td><td>0 seconds 60 ms</td></tr>
  <tr><td>1M</td><td>0 seconds 413 ms</td><td>0 seconds 435 ms</td></tr>
  <tr><td>10M</td><td>5 seconds 78 ms</td><td>6 seconds 712 ms</td></tr>
  <tr><td>50M</td><td>33 seconds 229 ms</td><td>35 seconds 659 ms</td></tr>
  <tr><td>100M</td><td>82 seconds 777 ms</td><td>86 seconds 194 ms</td></tr>
</table>

#### heapSort
##### Benchmark
<table>
  <tr><td align="center" colspan="3">Node v14</td></tr>
  <tr><td align="center"><b>input size</b></td><td align="center"><b>best time</b></td><td align="center"><b>worst time</b></td></tr>
  <tr><td>10k</td><td>0 seconds 12 ms</td><td>0 seconds 19 ms</td></tr>
  <tr><td>50k</td><td>0 seconds 33 ms</td><td>0 seconds 45 ms</td></tr>
  <tr><td>100k</td><td>0 seconds 54 ms</td><td>0 seconds 60 ms</td></tr>
  <tr><td>1M</td><td>0 seconds 413 ms</td><td>0 seconds 435 ms</td></tr>
  <tr><td>10M</td><td>5 seconds 78 ms</td><td>6 seconds 712 ms</td></tr>
  <tr><td>50M</td><td>33 seconds 229 ms</td><td>35 seconds 659 ms</td></tr>
  <tr><td>100M</td><td>82 seconds 777 ms</td><td>86 seconds 194 ms</td></tr>
</table>


#### quickSort
##### Benchmark
<table>
  <tr><td align="center"><b>input size</b></td><td align="center"><b>best time</b></td><td align="center"><b>worst time</b></td></tr>
  <tr><td>10k</td><td></td><td></td></tr>
  <tr><td>50k</td><td></td><td></td></tr>
  <tr><td>100k</td><td></td><td></td></tr>
  <tr><td>1M</td><td></td><td></td></tr>
  <tr><td>10M</td><td></td><td></td></tr>
  <tr><td>50M</td><td></td><td></td></tr>
  <tr><td>100M</td><td></td><td></td></tr>
</table>

## Build
```
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/eyas-ranjous/sort-algorithms-js/blob/master/LICENSE)
