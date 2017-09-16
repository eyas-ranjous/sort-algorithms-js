'use strict';

let Sorter = require('./sorter');

class BubbleSorter extends Sorter {

    constructor(list) {
        super(list);
    }

    /* 
     * @public
     *
     * @return {array} the sorted list
     */
    sort() {
        for (let i = this.list.length - 1; i > 0; i--) {
            for (let j = 0; j < i; j++) {
                if (this.list[j] > this.list[i]) {
                    this.swap(i, j);
                }
            }
        }
        return this.list;
    }

}

module.exports = BubbleSorter;