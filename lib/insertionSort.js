/*!
 * sort-algorithms-js
 * insertionSort
 * Copyright(c) 2015 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
 */

'use strict';

var swap = require('./helpers/swap');

module.exports = function(dataArray) {
    
    var count = dataArray.length,
        insertionIndex;

    for (var i = 1; i < count; i++) {
        
        insertionIndex = i;

        for (var j = i - 1; j >= 0; j--) {
            if (dataArray[j] > dataArray[insertionIndex]) {
                swap(dataArray, j, insertionIndex);
                insertionIndex = j;
            }
        }
    }

    return dataArray;
};