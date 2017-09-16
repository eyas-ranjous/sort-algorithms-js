'use strict';

let Sorter = require('./sorter');

class HeapSorter extends Sorter {

    constructor(list) {
        super(list);
        this.convertToHeap();
    }
    
    /* 
     * converts the list into a max heap data structure
     * 
     * @param {number} index
     *
     */
    convertToHeap(index = 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        if (parentIndex >= 0 && this.list[index] > this.list[parentIndex]) {
            this.swap(index, parentIndex);
            this.convertToHeap(parentIndex);
        }
        if (++index < this.list.length) {
            this.convertToHeap(index);
        }
    }

    /* 
     * recursively swaps element at a parent location
     * with the max value of its children
     * 
     * @param {number} index
     * @param {number} parentIndex
     * @param {number} leftindex
     * @param {number} rightIndex
     *
     */
    swapMaxWithParent(index, parentIndex, leftIndex, rightIndex) { 
        if (leftIndex < index) {
            let maxIndex = (this.list[rightIndex] > this.list[leftIndex] && 
                rightIndex < index) ? rightIndex : leftIndex;
            if (this.list[parentIndex] < this.list[maxIndex]) {
                this.swap(parentIndex, maxIndex);
            }
            this.swapMaxWithParent(index, maxIndex, (maxIndex * 2) + 1, (maxIndex * 2) + 2);
        }
    }

    /* 
     * sorts the heap structure by swapping each element
     * with first one and then recursively swapping parent
     * with its children max
     *
     * @return {array} the sorted list
     *
     */
    sort() {
        for (let i = this.list.length - 1; i > 0; i--) {
            this.swap(0, i);
            this.swapMaxWithParent(i, 0, 1, 2);
        }
        return this.list;
    }
}

module.exports = HeapSorter;