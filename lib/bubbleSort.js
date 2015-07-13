/*!
 * sort-algorithms-js
 * bubbleSort
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

var swap = require('./helpers/swap');

function bubbleSort(dataArray) {

    var count = dataArray.length,
        i, j;

    for (i = count - 1; i > 0; i--) {
        for (j = 0; j < i; j++) {
            if (dataArray[j] > dataArray[i]) {
                swap(dataArray, i, j);
            }
        }
    }

    return dataArray;
}

module.exports = bubbleSort;