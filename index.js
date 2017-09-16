'use strict';

let sorterFactory = require('./lib/sorterFactory');

module.exports = {
    bubbleSort: (list) => {
        return sorterFactory.create('bubble', list).sort();
    },
    insertionSort: (list) => {
        return sorterFactory.create('insertion', list).sort();
    },
    selectionSort: (list) => {
        return sorterFactory.create('selection', list).sort();
    },
    heapSort: (list) => {
        return sorterFactory.create('heap', list).sort();
    },
    quickSort: (list) => {
        return sorterFactory.create('quick', list).sort();
    },
    mergeSort: (list) => {
        return sorterFactory.create('merge', list).sort();
    }
};