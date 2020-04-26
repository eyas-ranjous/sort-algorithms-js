/**
 * sort-algorithms-js/insertionSort
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const SortAlgorithm = require('./sortAlgorithm');

/**
 * @class QuickSort
 * @extends SortAlgorithm
 */
class QuickSort extends SortAlgorithm {
  /**
   * @public
   * @return {array}
   */
  sort(startIndex = 0, endIndex = this._list.length - 1) {
    const pivotIndex = startIndex;
    let lowerIndex = startIndex;
    let higherIndex = endIndex;

    while (lowerIndex <= higherIndex) {
      while (this._shouldSwap(pivotIndex, lowerIndex)
        && lowerIndex < endIndex) {
        lowerIndex += 1;
      }
      while (!this._shouldSwap(pivotIndex, higherIndex)
        && higherIndex > startIndex) {
        higherIndex -= 1;
      }
      if (lowerIndex <= higherIndex) {
        this._swap(lowerIndex, higherIndex);
        lowerIndex += 1;
        higherIndex -= 1;
      }
    }

    if (startIndex < higherIndex) {
      this.sort(startIndex, higherIndex);
    }
    if (lowerIndex < endIndex) {
      this.sort(lowerIndex, endIndex);
    }

    return this._list;
  }
}

module.exports = QuickSort;
