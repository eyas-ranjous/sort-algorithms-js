<img width="400" alt="aljs" src="https://user-images.githubusercontent.com/6517308/80581008-1a8ff180-89d2-11ea-9126-25e91a00da6d.png">

[![npm](https://img.shields.io/npm/v/sort-algorithms-js.svg)](https://www.npmjs.com/package/sort-algorithms-js) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/sort-algorithms-js) [![npm](https://img.shields.io/npm/dm/sort-algorithms-js.svg)](https://www.npmjs.com/package/sort-algorithms-js)

soft algorithms implementation in javascript with ability to use a compare callback similar to javascript `.sort`.

## API

## Contents
  * [Install](#install)
  * [require](#require)
  * [import](#import)
  * [API](#api)
    * [bubbleSort](#bubbleSort)
    * [selectionSort](#selectionSort)
    * [insertioSort](#insertionSort)
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

#### selectionSort

#### insertionSort

#### radixSort

#### mergeSort

#### heapSort

#### quickSort

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

## License
The MIT License. Full License is [here](https://github.com/eyas-ranjous/sort-algorithms-js/blob/master/LICENSE)
