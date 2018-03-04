/**
 * sort-algorithms-js/SelectionSorter
 * @class
 * @extends Sorter
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const Sorter = require('./sorter');

class SelectionSorter extends Sorter {

  /* 
   * @constructor
   * @param {array} list
   */
  constructor(list) {
    super(list);
  }

  /* 
   * @public
   * selects the smallest element index and swap it with each element
   * @return {array} the sorted list
   */
  sort() {
    let minIndex = 0;
    for (let i = 0; i < this._list.length; i++) {
      minIndex = i;
      for (let j = i + 1; j < this._list.length; j++) {
        if (this._list[j] < this._list[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        this._swap(i, minIndex);
      }
    }
    return this._list;
  }

}

module.exports = SelectionSorter;