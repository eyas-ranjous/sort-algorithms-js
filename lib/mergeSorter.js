'use strict';

class MergeSorter {

    /* 
     * @params {array} list - numbers or strings
     */
    constructor(list) {
        this.list = list;
        this.start = 0;
        this.end = this.list.length - 1;
    }

    /* 
     * @private
     */
    getMiddle(start, end) {
        return start + Math.floor((end - start) / 2);
    }

    /* 
     * @private
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
     * @public
     *
     * partition the list logically and recursively
     * then sort and merge the resulting partitions
     *
     * @return {array} the sorted list
     */
    sort(start = this.start, end = this.end) {
        let middle = this.getMiddle(start, end);
        if (end - start > 0) {
            let leftPartition = this.sort(start, middle);
            let rightPartition = this.sort(middle + 1, end);
            return this.merge(leftPartition, rightPartition);
        }
        else if (start === end) {
            return [this.list[start]];
        }
    }

}

module.exports = MergeSorter;