/*!
 * sort-algorithms-js
 * convertArrayToHeap
 * Copyright(c) 2015 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
 */

'use strict';

var swap = require('./swap');

module.exports = function(arr) {

    var bubbleParent = function(arr, index) {
        var childIndex = index,
            parentIndex = Math.floor((childIndex - 1) / 2);

        if (parentIndex >= 0 && arr[childIndex] > arr[parentIndex]) {
            swap(arr, childIndex, parentIndex);
            bubbleParent(arr, parentIndex); // recursive call
        }
    };

    for (var i = 0; i < arr.length; i++) {
        bubbleParent(arr, i);
    }

    return arr;
};