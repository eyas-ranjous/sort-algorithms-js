'use strict';

let Sorter = require('./sorter');

class QuickSorter extends Sorter {

    constructor(list) {
        super(list);
        this.startIndex = 0;
        this.endIndex = this.list.length - 1;
    }

    /* 
     * chooses a pivot as a comparison reference and recursively places
     * smaller elements before and greater elements after
     *
     * @param {number} startIndex -  the logical devision startIndex index
     * @param {number} endIndex - the logical devision endIndex index
     *
     * @return {array} the sorted list
     */
    sort(startIndex = this.startIndex, endIndex = this.endIndex) {
        let pivotIndex = startIndex,
            lowIndex = startIndex,
            highIndex = endIndex;

        while (lowIndex <= highIndex) {
            while (this.list[lowIndex] < this.list[pivotIndex] && lowIndex < endIndex) {
                lowIndex++;
            }
            while (this.list[highIndex] > this.list[pivotIndex]) {
                highIndex--;
            }
            if (lowIndex <= highIndex) {
                this.swap(lowIndex, highIndex);
                lowIndex++;
                highIndex--;
            }
        }

        if (startIndex < highIndex) {
            this.sort(startIndex, highIndex);
        }

        if (lowIndex < endIndex) {
            this.sort(lowIndex, endIndex);
        }

        return this.list;
    }

}

module.exports = QuickSorter;