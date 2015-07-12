/*!
 * sort-algorithms-js
 * swap
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

function swap(dataArray, i, j) {
    var temp = dataArray[i];
    dataArray[i] = dataArray[j];
    dataArray[j] = temp;
}

module.exports = swap;