/**
 * sort-algorithms-js/InsertionSorter
 * @class
 * @extends Sorter
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const Sorter = require('./sorter');

class InsertionSorter extends Sorter {

  /* 
   * @constructor
   * @param {array} list
   */
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
    let insertionIndex = 0;
    for (let i = 1; i < this._list.length; i++) {
      insertionIndex = i;
      for (let j = i - 1; j >= 0; j--) {
        if (this._list[j] > this._list[insertionIndex]) {
          this._swap(j, insertionIndex);
          insertionIndex = j;
        }
      }
    }
    return this._list;
  }

}

module.exports = InsertionSorter;