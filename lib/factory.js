/**
 * sort-algorithms-js
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const { sort } = require('./sort');
const { bubbleSort } = require('./bubbleSort');
const { insertionSort } = require('./insertionSort');
const { selectionSort } = require('./selectionSort');
const { radixSort } = require('./radixSort');
const { heapSort } = require('./heapSort');
const { quickSort } = require('./quickSort');
const { mergeSort } = require('./mergeSort');

exports.bubbleSort = (list, compare) => (
  sort(bubbleSort, { list }, compare)
);

exports.insertionSort = (list, compare) => (
  sort(insertionSort, { list }, compare)
);

exports.selectionSort = (list, compare) => (
  sort(selectionSort, { list }, compare)
);

exports.radixSort = (list, order, getNumber) => (
  sort(radixSort, { list, order, getNumber })
);

exports.heapSort = (list, compare) => (
  sort(heapSort, { list }, compare)
);

exports.quickSort = (list, compare) => (
  sort(quickSort, { list }, compare)
);

exports.mergeSort = (list, compare) => (
  sort(mergeSort, { list }, compare)
);
