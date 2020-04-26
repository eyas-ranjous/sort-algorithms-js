/**
 * sort-algorithms-js
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const SortAlgorithm = require('./sortAlgorithm');

/**
 * @class SelectionSort
 * @extends SortAlgorithm
 */
class SelectionSort extends SortAlgorithm {
  /**
   * @public
   * @return {array}
   */
  sort() {
    for (let i = 0; i < this._list.length - 1; i += 1) {
      let selectedIndex = i;
      for (let j = i + 1; j < this._list.length; j += 1) {
        if (this._shouldSwap(selectedIndex, j)) {
          selectedIndex = j
        }
      }
      if (selectedIndex !== i) {
        this._swap(selectedIndex, i);
      }
    }
    return this._list;
  }
}

module.exports = SelectionSort;
