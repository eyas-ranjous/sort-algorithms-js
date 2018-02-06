'use strict';

let Sorter = require('./sorter');

class SelectionSorter extends Sorter {

    constructor(list) {
        super(list);
    }

    /* 
     * @public
     * selects the smallest element index and swap it with each element
     * @return {array} the sorted list
     */
    sort() {
        let minIndex;
        for (let i = 0; i < this.list.length; i++) {
            minIndex = i;
            for (let j = i + 1; j < this.list.length; j++) {
                if (this.list[j] < this.list[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex != i) {
                this.swap(i, minIndex);
            }
        }

        return this.list;
    }

}

module.exports = SelectionSorter;