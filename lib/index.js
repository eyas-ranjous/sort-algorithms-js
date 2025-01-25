/**
 * sort-algorithms-js
 * Main entry point that exposes all sorting algorithms
 */

 const { sort } = require('./sort');
 const { bubbleSort } = require('./bubbleSort');
 const { insertionSort } = require('./insertionSort');
 const { selectionSort } = require('./selectionSort');
 const { radixSort } = require('./radixSort');
 const { heapSort } = require('./heapSort');
 const { quickSort } = require('./quickSort');
 const { mergeSort } = require('./mergeSort');
 
 /**
  * Exports each sort as a convenient function.
  * 
  * @example
  * const { bubbleSort } = require('sort-algorithms-js');
  * const sorted = bubbleSort([5,4,1,3,2]); 
  * // => [1,2,3,4,5]
  */
 module.exports = {
   /**
    * Bubble Sort
    * @param {T[]} list - The array to sort
    * @param {Function} [compare] - Optional comparison function
    * @returns {T[]} The sorted array
    */
   bubbleSort: (list, compare) => sort(bubbleSort, { list }, compare),
 
   /**
    * Insertion Sort
    * @param {T[]} list
    * @param {Function} [compare]
    * @returns {T[]}
    */
   insertionSort: (list, compare) => sort(insertionSort, { list }, compare),
 
   /**
    * Selection Sort
    * @param {T[]} list
    * @param {Function} [compare]
    * @returns {T[]}
    */
   selectionSort: (list, compare) => sort(selectionSort, { list }, compare),
 
   /**
    * Radix Sort - for numeric arrays
    * @param {T[]} list
    * @param {'asc'|'desc'} [order]
    * @param {Function} [getNumber]
    * @returns {T[]}
    */
   radixSort: (list, order, getNumber) => sort(radixSort, { list, order, getNumber }),
 
   /**
    * Heap Sort
    * @param {T[]} list
    * @param {Function} [compare]
    * @returns {T[]}
    */
   heapSort: (list, compare) => sort(heapSort, { list }, compare),
 
   /**
    * Quick Sort
    * @param {T[]} list
    * @param {Function} [compare]
    * @returns {T[]}
    */
   quickSort: (list, compare) => sort(quickSort, { list }, compare),
 
   /**
    * Merge Sort
    * @param {T[]} list
    * @param {Function} [compare]
    * @returns {T[]}
    */
   mergeSort: (list, compare) => sort(mergeSort, { list }, compare),
 };
 