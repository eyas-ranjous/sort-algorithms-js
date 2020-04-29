/**
 * sort-algorithms-js
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const CompareSortAlgorithm = require('./compareSortAlgorithm');

/**
 * @class BubbleSort
 * @extends CompareSortAlgorithm
 */
class BubbleSort extends CompareSortAlgorithm {
  /**
   * @public
   * @return {array}
   */
  sort() {
    let upperIndex = this._list.length - 1;
    while (upperIndex > 0) {
      let swapIndex = 0;
      for (let i = 0; i < upperIndex; i += 1) {
        if (this._shouldSwap(i, i + 1)) {
          this._swap(i, i + 1);
          swapIndex = i;
        }
      }
      upperIndex = swapIndex;
    }
    return this._list;
  }
}

module.exports = BubbleSort;
