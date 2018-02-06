
'use strict';

let Sorter = require('./sorter');

class InsertionSorter extends Sorter {

    constructor(list) {
        super(list);
    }

    /* 
     * @public
     * inserts smaller elements before bigger ones 
     * and maintains an index on the bigger element
     * @return {array} the sorted list
     */
    sort() {
        let insertionIndex;
        for (let i = 1; i < this.list.length; i++) {
            insertionIndex = i;
            for (let j = i - 1; j >= 0; j--) {
                if (this.list[j] > this.list[insertionIndex]) {
                    this.swap(j, insertionIndex);
                    insertionIndex = j;
                }
            }
        }
        return this.list;
    }

}

module.exports = InsertionSorter;