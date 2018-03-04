/**
 * sort-algorithms-js/HeapSorter
 * @class
 * @extends Sorter
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const Sorter = require('./sorter');

class HeapSorter extends Sorter {

  /* 
   * @constructor
   * @param {array} list
   */
  constructor(list) {
    super(list);
    this._convertToMaxHeap();
  }

  /* 
   * sorts maxHeap by swapping first and i then fix first 3 elements in heap
   * @return {array} the sorted list
   *
   */
  sort() {
    for (let i = this._list.length - 1; i > 0; i--) {
      this._swap(0, i);
      this._swapMaxWithParent(i, 0, 1, 2);
    }
    return this._list;
  }

  /* 
   * @private
   * converts the list into a MaxHeap data structure
   * @param {number} [index=0]
   */
  _convertToMaxHeap(index = 0) {
    let parentIndex = Math.floor((index - 1) / 2);
    if (parentIndex >= 0 && this._list[index] > this._list[parentIndex]) {
      this._swap(index, parentIndex);
      this._convertToMaxHeap(parentIndex);
    }
    if (++index < this._list.length) {
      this._convertToMaxHeap(index);
    }
  }

  /* 
   * @private
   * returns the max child index
   * @param {number} leftIndex
   * @param {number} rightIndex
   */
  _getMaxChild(index, leftIndex, rightIndex) {
    if (this._list[rightIndex] > this._list[leftIndex] && rightIndex < index) {
      return rightIndex;
    }
    else {
      return leftIndex;
    }
  }

  /* 
   * @private
   * recursively swaps element parent with max child
   * @param {number} index
   * @param {number} parentIndex
   * @param {number} leftIndex
   * @param {number} rightIndex
   */
  _swapMaxWithParent(index, parentIndex, leftIndex, rightIndex) { 
    if (leftIndex < index) {
      let maxIndex = this._getMaxChild(index, leftIndex, rightIndex);
      if (this._list[parentIndex] < this._list[maxIndex]) {
        this._swap(parentIndex, maxIndex);
      }
      let left = (maxIndex * 2) + 1;
      let right = (maxIndex * 2) + 2;
      this._swapMaxWithParent(index, maxIndex, left, right);
    }
  }
}

module.exports = HeapSorter;