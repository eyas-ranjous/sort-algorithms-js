## sort-algorithms-js
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
  * [benchmark](#benchmark)
 * [Build](#build)
 * [License](#license)

## Implemented Algorithms

<table>
  <tr><th>algorithm</th><th>runtime</th></tr>
  <tr><td>Bubble Sort</td><td>O(n<sup>2</sup>)</td></tr>
  <tr><td>Selection Sort</td><td>O(n<sup>2</sup>)</td></tr>
  <tr><td>Insertion Sort</td><td>O(n<sup>2</sup>)</td></tr>
  <tr><td>Radix Sort (numbers only)</td><td>O(n*k)</td></tr>
  <tr><td>Heap Sort</td><td>O(n*log(n))</td></tr>
  <tr><td>Quick Sort</td><td>O(n*log(n))</td></tr>
  <tr><td>Merge Sort</td><td>O(n*log(n))</td></tr>
</table>

## Install

```sh
npm install --save @datastructures-js/stack
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

### Benchmark

## Build
```
grunt build
```

### License
The MIT License. Full License is [here](https://github.com/eyas-ranjous/sort-algorithms-js/blob/master/LICENSE)