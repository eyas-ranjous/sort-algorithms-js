/*!
 * sort-algorithms-js
 * bubbleSort
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

'use strict';

module.exports = function(dataArray) {

    var swap = require('./helpers/swap'),
        count = dataArray.length,
        i, j;

    for (i = count - 1; i > 0; i--) {
        for (j = 0; j < i; j++) {
            if (dataArray[j] > dataArray[i]) {
                swap(dataArray, i, j);
            }
        }
    }

    return dataArray;
};