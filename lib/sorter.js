'use strict';

class Sorter {

    constructor(list) {
        this.list = list;
    }

    /* 
     * @protected
     * swaps element at index i with element at index j
     * @param {number} i
     * @param {number} j
     */
    swap(i, j) {
        let temp = this.list[i];
        this.list[i] = this.list[j];
        this.list[j] = temp;
    }


}

module.exports = Sorter;