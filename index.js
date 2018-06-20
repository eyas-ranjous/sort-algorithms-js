/**
 * sort-algorithms-js
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const bubbleSort = require('./lib/bubbleSort');
const insertionSort = require('./lib/insertionSort');
const selectionSort = require('./lib/selectionSort');
const radixSort = require('./lib/radixSort');
const heapSort = require('./lib/heapSort');
const quickSort = require('./lib/quickSort');
const mergeSort = require('./lib/mergeSort');

module.exports = {
  bubbleSort,
  insertionSort,
  selectionSort,
  radixSort,
  heapSort,
  quickSort,
  mergeSort
};
