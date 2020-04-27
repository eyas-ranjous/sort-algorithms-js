/**
 * sort-algorithms-js
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const SortAlgorithm = require('./sortAlgorithm');

/**
 * @class MergeSort
 * @extends SortAlgorithm
 */
class MergeSort extends SortAlgorithm {
  /**
   * @private
   * @return {number}
   */
  _getMiddleIndex(startIndex, endIndex) {
    return startIndex + Math.floor((endIndex - startIndex) / 2);
  }

  /**
   * @private
   * merges two sorted partitions through swapping elements
   * @return {array}
   */
  _partitionAndSort(startIndex = 0, endIndex = this._list.length - 1) {
    if (endIndex - startIndex <= 0) return [startIndex, startIndex + 1];

    const middleIndex = this._getMiddleIndex(startIndex, endIndex);
    const leftPartition = this._partitionAndSort(startIndex, middleIndex);
    const rightPartition = this._partitionAndSort(middleIndex + 1, endIndex);

    const [leftStart, leftEnd] = leftPartition;
    const [rightStart, rightEnd] = rightPartition;
    let leftIndex = leftStart;
    let rightIndex = rightStart;
    const merged = [];
    while (leftIndex < leftEnd || rightIndex < rightEnd) {
      if (rightIndex === rightEnd) {
        merged.push(this._list[leftIndex]);
        leftIndex += 1;
      } else if (leftIndex === leftEnd) {
        merged.push(this._list[rightIndex]);
        rightIndex += 1;
      } else if (this._shouldSwap(leftIndex, rightIndex)) {
        merged.push(this._list[rightIndex]);
        rightIndex += 1;
      } else {
        merged.push(this._list[leftIndex]);
        leftIndex += 1;
      }
    }

    // update list segment with merged partition
    let j = 0;
    for (let i = leftStart; i < rightEnd; i += 1) {
      this._list[i] = merged[j];
      j += 1;
    }

    return [leftStart, rightEnd];
  }

  /**
   * @public
   * @return {array}
   */
  sort() {
    if (this._list.length <= 1) return this._list;
    this._partitionAndSort();
    return this._list;
  }
}

module.exports = MergeSort;
