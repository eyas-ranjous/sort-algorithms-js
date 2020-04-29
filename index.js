/**
 * sort-algorithms-js
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const BubbleSort = require('./src/bubbleSort');
const InsertionSort = require('./src/insertionSort');
const SelectionSort = require('./src/selectionSort');
const RadixSort = require('./src/radixSort');
const HeapSort = require('./src/heapSort');
const QuickSort = require('./src/quickSort');
const MergeSort = require('./src/mergeSort');

module.exports = {
  bubbleSort: (list, compare) => new BubbleSort(list, compare).sort(),
  insertionSort: (list, compare) => new InsertionSort(list, compare).sort(),
  selectionSort: (list, compare) => new SelectionSort(list, compare).sort(),
  radixSort: (list, order, cb) => new RadixSort(list, order, cb).sort(),
  heapSort: (list, compare) => new HeapSort(list, compare).sort(),
  quickSort: (list, compare) => new QuickSort(list, compare).sort(),
  mergeSort: (list, compare) => new MergeSort(list, compare).sort()
};
