/*!
 * sort-algorithms-js
 * quickSort
 * Copyright(c) 2015 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
 */

'use strict';

var swap = require('./helpers/swap');

module.exports = function(dataArray) {

    var partitionAndSort = function(arr, startIndex, endIndex) {
        
        var pivot = startIndex,
            low = startIndex,
            high = endIndex;

        while (low <= high) {
            while (arr[low] < arr[pivot] && low < endIndex) {
                low++;
            }
            while (arr[high] > arr[pivot]) {
                high--;
            }
            if (low <= high) {
                swap(arr, low, high);
                low++;
                high--;
            }
        }

        if (startIndex < high) {
            partitionAndSort(arr, startIndex, high);
        }

        if (low < endIndex) {
            partitionAndSort(arr, low, endIndex);
        }

        return arr;
    };

    return partitionAndSort(dataArray, 0, dataArray.length - 1);
};
