/**
 * sort-algorithms-js
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const SortAlgorithm = require('./sortAlgorithm');

/**
 * @class InsertionSort
 * @extends SortAlgorithm
 */
class InsertionSort extends SortAlgorithm {
  /**
   * @public
   * @return {array}
   */
  sort() {
    for (let i = 1; i < this._list.length; i += 1) {
      let insertionIndex = i;
      for (let j = i - 1; j >= 0; j -= 1) {
        if (this._shouldSwap(j, insertionIndex)) {
          this._swap(j, insertionIndex);
          insertionIndex = j;
        }
      }
    }
    return this._list;
  }
}

module.exports = InsertionSort;
