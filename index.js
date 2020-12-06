/**
 * sort-algorithms-js
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const {
  bubbleSort,
  insertionSort,
  selectionSort,
  radixSort,
  heapSort,
  quickSort,
  mergeSort
} = require('./lib/factory');

exports.bubbleSort = bubbleSort;
exports.insertionSort = insertionSort;
exports.selectionSort = selectionSort;
exports.radixSort = radixSort;
exports.heapSort = heapSort;
exports.quickSort = quickSort;
exports.mergeSort = mergeSort;
