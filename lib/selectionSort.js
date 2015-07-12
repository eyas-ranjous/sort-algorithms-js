/*!
 * sort-algorithms-js
 * selectionSort
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

var swap = require('./helpers/swap');

function selectionSort(dataArray) {

    var count = dataArray.length,
        i, j, minIndex;

    for (i = 0; i < count; i++) {
        
        minIndex = i;

        for (j = i + 1; j < count; j++) {
            if (dataArray[j] < dataArray[minIndex]) {
                minIndex = j;
            }
        }
        
        if (minIndex != i) {
            swap(dataArray, i, minIndex);
        }
    }

    return dataArray;
}

module.exports = selectionSort;