'use strict';

let Sorter = require('./sorter');

class HeapSorter extends Sorter {

    constructor(list) {
        super(list);
        this.convertToMaxHeap();
    }
    
    /* 
     * @private
     * converts the list into a MaxHeap data structure
     * @param {number} [index=0]
     */
    convertToMaxHeap(index = 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        if (parentIndex >= 0 && this.list[index] > this.list[parentIndex]) {
            this.swap(index, parentIndex);
            this.convertToMaxHeap(parentIndex);
        }
        if (++index < this.list.length) {
            this.convertToMaxHeap(index);
        }
    }

    /* 
     * @private
     * returns the max child index
     * @param {number} leftIndex
     * @param {number} rightIndex
     */
     getMaxChild(index, leftIndex, rightIndex) {
        return this.list[rightIndex] > this.list[leftIndex] && 
            rightIndex < index ? rightIndex : leftIndex;
     }

    /* 
     * @private
     * recursively swaps element parent with max child
     * @param {number} index
     * @param {number} parentIndex
     * @param {number} leftIndex
     * @param {number} rightIndex
     */
    swapMaxWithParent(index, parentIndex, leftIndex, rightIndex) { 
        if (leftIndex < index) {
            let maxIndex = this.getMaxChild(index, leftIndex, rightIndex);
            if (this.list[parentIndex] < this.list[maxIndex]) {
                this.swap(parentIndex, maxIndex);
            }
            this.swapMaxWithParent(index, maxIndex, (maxIndex * 2) + 1, (maxIndex * 2) + 2);
        }
    }

    /* 
     * sorts the maxHeap by swapping first and i then fix first 3 elements in the heap 
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