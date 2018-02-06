'use strict';

let Sorter = require('./sorter');

class MergeSorter extends Sorter {

    constructor(list) {
        super(list);
        this.startIndex = 0;
        this.endIndex = this.list.length - 1;
    }

    /* 
     * @private
     * merges two sorted partitions into one sorted partition
     * @param {array} leftPartition
     * @param {array} rightPartition
     * @return {array} the merged and sorted partition
     */
    merge(leftPartition, rightPartition) {
        let leftIndex = 0,
            rightIndex = 0,
            i = 0, merged = [],
            leftLength = leftPartition.length,
            rightLength = rightPartition.length;

        while (leftIndex < leftLength || rightIndex < rightLength) {
            if (leftIndex === leftLength) {
                for (i = rightIndex; i < rightLength; i++) {
                    merged.push(rightPartition[rightIndex]);
                    rightIndex++;
                }
            }
            else if (rightIndex === rightLength) {
                for (i = leftIndex; i < leftLength; i++) {
                    merged.push(leftPartition[leftIndex]);
                    leftIndex++;
                }
            }
            else if (leftPartition[leftIndex] < rightPartition[rightIndex]) {
                merged.push(leftPartition[leftIndex]);
                leftIndex++;
            }
            else {
                merged.push(rightPartition[rightIndex]);
                rightIndex++;
            }     
        }
        return merged;
    }

    /* 
     * @public 
     * partition the list logically and recursively
     * then sort and merge the resulting partitions
     * @param {number} startIndex -  the logical devision startIndex index
     * @param {number} endIndex - the logical devision endIndex index
     * @return {array} the sorted list
     */
    sort(startIndex = this.startIndex, endIndex = this.endIndex) {
        let middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
        if (endIndex - startIndex > 0) {
            let leftPartition = this.sort(startIndex, middleIndex);
            let rightPartition = this.sort(middleIndex + 1, endIndex);
            return this.merge(leftPartition, rightPartition);
        }
        else if (startIndex === endIndex) {
            return [this.list[startIndex]];
        }
    }

}

module.exports = MergeSorter;