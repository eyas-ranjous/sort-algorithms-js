/**
 * sort-algorithms-js
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const SortAlgorithm = require('./sortAlgorithm');

/**
 * @class BubbleSort
 * @extends SortAlgorithm
 */
class BubbleSort extends SortAlgorithm {
  /**
   * @public
   * @return {array}
   */
  sort() {
    for (let i = 0; i < this._list.length - 1; i += 1) {
      for (let j = i + 1; j < this._list.length; j += 1) {
        if (this._shouldSwap(i, j)) this._swap(i, j);
      }
    }
    return this._list;
  }
}

module.exports = BubbleSort;
