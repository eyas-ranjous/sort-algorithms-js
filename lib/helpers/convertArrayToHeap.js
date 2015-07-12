/*!
 * sort-algorithms-js
 * convertArrayToHeap
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

var swap = require('./swap');

function bubbleParent(arr, index) {
    var childIndex = index,
        parentIndex = Math.floor((childIndex - 1) / 2);

    if (parentIndex >= 0 && arr[childIndex] > arr[parentIndex]) {
        swap(arr, childIndex, parentIndex);
        bubbleParent(arr, parentIndex); // recursive call
    }
}

function convertArrayToHeap(arr) {
    for (var i = 0; i < arr.length; i++) {
        bubbleParent(arr, i);
    }
    return arr;
}

module.exports = convertArrayToHeap;