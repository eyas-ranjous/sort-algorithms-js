/*!
 * sort-algorithms-js
 * mergeSort
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

'use strict';

var getMiddle = require('./helpers/getMiddle');

module.exports = function(numbersArray) {

    var merge = function(leftPartition, rightPartition) {
        
        var mergePartitions = function(merged, leftPartition, rightPartition) {
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
        };

        return mergePartitions([], leftPartition, rightPartition);
    },

    partitionAndMerge = function(arr, startIndex, endIndex) {

        var middleIndex = getMiddle(startIndex, endIndex),
            leftPartition,
            rightPartition;

        if (endIndex - startIndex > 0) {
            leftPartition = partitionAndMerge(arr, startIndex, middleIndex);
            rightPartition = partitionAndMerge(arr, middleIndex + 1, endIndex);
        }
        if (startIndex == endIndex) {
            return [arr[startIndex]];
        }

        return merge(leftPartition, rightPartition);
    };

    return partitionAndMerge(numbersArray, 0, numbersArray.length - 1);
};