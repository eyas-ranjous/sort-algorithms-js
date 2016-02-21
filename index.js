/*!
 * sort-algorithms-js
 * index (main module object)
 * Copyright(c) 2015 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
 */

'use strict';

module.exports = {
    bubbleSort: require('./lib/bubbleSort'),
    insertionSort: require('./lib/insertionSort'),
    selectionSort: require('./lib/selectionSort'),
    heapSort: require('./lib/heapSort'),
    quickSort: require('./lib/quickSort'),
    mergeSort: require('./lib/mergeSort')
};