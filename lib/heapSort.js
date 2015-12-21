/*!
 * sort-algorithms-js
 * heapSort
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

'use strict';

module.exports = function(dataArray) {

    var swap = require('./helpers/swap'),
        convertArrayToHeap = require('./helpers/convertArrayToHeap'),
        dataHeap = convertArrayToHeap(dataArray);

    function swapMaxChildWithParent(dataHeap, i, parentIndex, leftIndex, rightIndex) {
        var maxIndex;
        if (leftIndex < i) {
            // determine max index
            maxIndex = ((dataHeap[rightIndex] > dataHeap[leftIndex] && 
                rightIndex < i) ? rightIndex : leftIndex);

            // swap max with parent if max is bigger
            if (dataHeap[parentIndex] < dataHeap[maxIndex]) {
                swap(dataHeap, parentIndex, maxIndex);
            }

            // re-calculate parent and its left and right children
            parentIndex = maxIndex;
            leftIndex = (parentIndex * 2) + 1;
            rightIndex = (parentIndex * 2) + 2;

            // recursive call with the new parent and children
            swapMaxChildWithParent(dataHeap, i, parentIndex, leftIndex, rightIndex);
        }
    }
    
    for (var i = dataHeap.length - 1; i > 0; i--) {
        // always swap first with last
        swap(dataHeap, 0, i);
        swapMaxChildWithParent(dataHeap, i, 0, 1, 2);
    }

    return dataHeap;
};