/*!
 * sort-algorithms-js
 * insertionSort
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

var swap = require('./helpers/swap');

function insertionSort(dataArray) {

    var count = dataArray.length,
        i, j, insertionIndex;

    for (i = 1; i < count; i++) {
        
        insertionIndex = i;

        for (j = i - 1; j >= 0; j--) {
            if (dataArray[j] > dataArray[insertionIndex]) {
                swap(dataArray, j, insertionIndex);
                insertionIndex = j;
            }
        }
    }

    return dataArray;
}

module.exports = insertionSort;