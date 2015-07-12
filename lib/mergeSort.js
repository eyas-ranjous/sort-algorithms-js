/*!
 * sort-algorithms-js
 * mergeSort
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

var getMiddle = require('./helpers/getMiddle');

function mergeSort(numbersArray) {
    return partitionAndMerge(numbersArray, 0, numbersArray.length - 1);
}

function partitionAndMerge(arr, startIndex, endIndex) {

    var middleIndex = getMiddle(startIndex, endIndex),
        leftPartition,
        rightPartition;

    if (endIndex - startIndex > 0) {
        leftPartition = partition(arr, startIndex, middleIndex);
        rightPartition = partition(arr, middleIndex + 1, endIndex);
    }

    if (startIndex == endIndex) {
        return [arr[startIndex]];
    }

    return merge(leftPartition, rightPartition);
}

function merge(leftPartition, rightPartition) {

    function mergePartitions(merged, leftPartition, rightPartition) {
        if (leftPartition.length === 0) {
            return merged.concat(rightPartition);
        }

        if (rightPartition.length === 0) {
            return merged.concat(leftPartition);
        }

        if (leftPartition[0] < rightPartition[0]) {
            merged.push(leftPartition.shift());
        }
        else {
            merged.push(rightPartition.shift());
        }

        return mergePartitions(merged, leftPartition, rightPartition);
    }

    return mergePartitions([], leftPartition, rightPartition);
}

module.exports = mergeSort;