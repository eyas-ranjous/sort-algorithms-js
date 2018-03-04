/**
 * sort-algorithms-js/QuickSorter
 * @class
 * @extends Sorter
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const Sorter = require('./sorter');

class QuickSorter extends Sorter {

  /* 
   * @constructor
   * @param {array} list
   */
  constructor(list) {
    super(list);
    this._startIndex = 0;
    this._endIndex = this._list.length - 1;
  }

  /* 
   * chooses a pivot as a comparison reference and recursively places
   * smaller elements before and greater elements after
   * @param {number} startIndex -  the logical devision startIndex index
   * @param {number} endIndex - the logical devision endIndex index
   * @return {array} the sorted list
   */
  sort(startIndex = this._startIndex, endIndex = this._endIndex) {
    let pivotIndex = startIndex;
    let lowIndex = startIndex;
    let highIndex = endIndex;

    while (lowIndex <= highIndex) {
      while (this._list[lowIndex] < this._list[pivotIndex] && 
        lowIndex < endIndex) {
        lowIndex++;
      }
      while (this._list[highIndex] > this._list[pivotIndex]) {
        highIndex--;
      }
      if (lowIndex <= highIndex) {
        this._swap(lowIndex, highIndex);
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
    return this._list;
  }

}

module.exports = QuickSorter;