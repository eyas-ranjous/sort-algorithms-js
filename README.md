<img width="350" alt="aljs" src="https://user-images.githubusercontent.com/6517308/80581008-1a8ff180-89d2-11ea-9126-25e91a00da6d.png">

[![npm](https://img.shields.io/npm/v/sort-algorithms-js.svg)](https://www.npmjs.com/package/sort-algorithms-js) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/sort-algorithms-js) [![npm](https://img.shields.io/npm/dm/sort-algorithms-js.svg)](https://www.npmjs.com/package/sort-algorithms-js)

soft algorithms implementation with ability to use a compare callback similar to javascript `.sort`.

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

##### Benchmark
<table>
  <tr><td align="center"><b>input size</b></td><td align="center"><b>best time</b></td><td align="center"><b>worst time</b></td></tr>
  <tr><td>10k</td><td></td><td></td></tr>
  <tr><td>10k</td><td></td><td></td></tr>
  <tr><td>50k</td><td></td><td></td></tr>
  <tr><td>100k</td><td></td><td></td></tr>
  <tr><td>1M</td><td></td><td></td></tr>
</table>

#### selectionSort
##### Benchmark
<table>
  <tr><td align="center"><b>input size</b></td><td align="center"><b>best time</b></td><td align="center"><b>worst time</b></td></tr>
  <tr><td>10k</td><td></td><td></td></tr>
  <tr><td>10k</td><td></td><td></td></tr>
  <tr><td>50k</td><td></td><td></td></tr>
  <tr><td>100k</td><td></td><td></td></tr>
  <tr><td>1M</td><td></td><td></td></tr>
</table>

#### insertionSort
##### Benchmark
<table>
  <tr><td align="center"><b>input size</b></td><td align="center"><b>best time</b></td><td align="center"><b>worst time</b></td></tr>
  <tr><td>10k</td><td></td><td></td></tr>
  <tr><td>10k</td><td></td><td></td></tr>
  <tr><td>50k</td><td></td><td></td></tr>
  <tr><td>100k</td><td></td><td></td></tr>
  <tr><td>1M</td><td></td><td></td></tr>
</table>

#### radixSort
##### Benchmark
<table>
  <tr><td align="center"><b>input size</b></td><td align="center"><b>best time</b></td><td align="center"><b>worst time</b></td></tr>
  <tr><td>10k</td><td></td><td></td></tr>
  <tr><td>10k</td><td></td><td></td></tr>
  <tr><td>50k</td><td></td><td></td></tr>
  <tr><td>100k</td><td></td><td></td></tr>
  <tr><td>1M</td><td></td><td></td></tr>
  <tr><td>10M</td><td></td><td></td></tr>
  <tr><td>50M</td><td></td><td></td></tr>
</table>

#### mergeSort
##### Benchmark
<table>
  <tr><td align="center"><b>input size</b></td><td align="center"><b>best time</b></td><td align="center"><b>worst time</b></td></tr>
  <tr><td>10k</td><td></td><td></td></tr>
  <tr><td>10k</td><td></td><td></td></tr>
  <tr><td>50k</td><td></td><td></td></tr>
  <tr><td>100k</td><td></td><td></td></tr>
  <tr><td>1M</td><td></td><td></td></tr>
  <tr><td>10M</td><td></td><td></td></tr>
  <tr><td>50M</td><td></td><td></td></tr>
  <tr><td>100M</td><td></td><td></td></tr>
</table>

#### heapSort
##### Benchmark
<table>
  <tr><td align="center"><b>input size</b></td><td align="center"><b>best time</b></td><td align="center"><b>worst time</b></td></tr>
  <tr><td>10k</td><td></td><td></td></tr>
  <tr><td>10k</td><td></td><td></td></tr>
  <tr><td>50k</td><td></td><td></td></tr>
  <tr><td>100k</td><td></td><td></td></tr>
  <tr><td>1M</td><td></td><td></td></tr>
  <tr><td>10M</td><td></td><td></td></tr>
  <tr><td>50M</td><td></td><td></td></tr>
  <tr><td>100M</td><td></td><td></td></tr>
</table>

#### quickSort
##### Benchmark
<table>
  <tr><td align="center"><b>input size</b></td><td align="center"><b>best time</b></td><td align="center"><b>worst time</b></td></tr>
  <tr><td>10k</td><td></td><td></td></tr>
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
