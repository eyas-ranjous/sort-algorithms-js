'use strict';

let Sorter = require('./sorter');

class MergeSorter extends Sorter {

    constructor(list) {
        super(list);
        this.startIndex = 0;
        this.endIndex = this.list.length - 1;
    }

    /* 
     * merges two sorted partitions into one sorted partition
     * 
     * @param {array} leftPartition
     * @param {array} rightPartition
     * @param {merged} memoize the merged sorted partition
     *
     * @return {array} the sorted partition
     */
    merge(leftPartition, rightPartition, merged = []) {
        if (leftPartition.length === 0) {
            return merged.concat(rightPartition);
        }
        else if (rightPartition.length === 0) {
            return merged.concat(leftPartition);
        }
        else if (leftPartition[0] < rightPartition[0]) {
            merged.push(leftPartition.shift());
        }
        else {
            merged.push(rightPartition.shift());
        }
        return this.merge(leftPartition, rightPartition, merged);
    }

    /* 
     * partition the list logically and recursively
     * then sort and merge the resulting partitions
     *
     * @param {number} startIndex -  the logical devision startIndex index
     * @param {number} endIndex - the logical devision endIndex index
     *
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