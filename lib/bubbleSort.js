/*!
 * sort-algorithms-js
 * bubbleSort
 * Copyright(c) 2015 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
 */

'use strict';

var swap = require('./helpers/swap');

module.exports = function(dataArray) {

    var count = dataArray.length;
    
    for (var i = count - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (dataArray[j] > dataArray[i]) {
                swap(dataArray, i, j);
            }
        }
    }

    return dataArray;
};