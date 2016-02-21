/*!
 * sort-algorithms-js
 * selectionSort
 * Copyright(c) 2015 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
 */

'use strict';

var swap = require('./helpers/swap');

module.exports = function(dataArray) {

    var count = dataArray.length,
        minIndex;

    for (var i = 0; i < count; i++) {
        
        minIndex = i;

        for (var j = i + 1; j < count; j++) {
            if (dataArray[j] < dataArray[minIndex]) {
                minIndex = j;
            }
        }
        
        if (minIndex != i) {
            swap(dataArray, i, minIndex);
        }
    }

    return dataArray;
};