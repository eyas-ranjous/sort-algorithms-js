/**
 * sort-algorithms-js
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const SortAlgorithm = require('./sortAlgorithm');

/**
 * @class InsertionSort
 * @extends SortAlgorithm
 */
class HeapSort extends SortAlgorithm {
  /**
   * @private
   * calculates a parent's index from a child's index
   * @param {number} parentIndex
   * @returns {number}
   */
  _getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  /**
   * @private
   * calculates the left child's index of a parent's index
   * @param {number} parentIndex
   * @returns {number}
   */
  _getLeftChildIndex(parentIndex) {
    return (parentIndex * 2) + 1;
  }

  /**
   * @private
   * calculates the right child's index of a parent's index
   * @param {number} parentIndex
   * @returns {number}
   */
  _getRightChildIndex(parentIndex) {
    return (parentIndex * 2) + 2;
  }

  /**
   * @protected
   * @override
   * @return {boolean}
   */
  _shouldSwap(i, j) {
    return this._compare(this._list[j], this._list[i]) > 0;
  }

  /**
   * @private
   * bubbles an element at a position up in the heap
   */
  _heapifyUp(i) {
    let childIndex = i;
    let parentIndex = this._getParentIndex(childIndex);

    while (this._shouldSwap(parentIndex, childIndex)) {
      this._swap(parentIndex, childIndex);
      childIndex = parentIndex;
      parentIndex = this._getParentIndex(childIndex);
    }
  }

  /**
   * @private
   * converts the array into a heap
   */
  _heapify() {
    for (let i = 0; i < this._list.length; i += 1) {
      this._heapifyUp(i);
    }
    return this._list;
  }

  /**
   * @private
   * @param {number}
   */
  _compareChildrenBefore(i, leftIndex, rightIndex) {
    if (this._shouldSwap(leftIndex, rightIndex) && rightIndex < i) {
      return rightIndex;
    }
    return leftIndex;
  }

  /**
   * @private
   * pushes the swapped element with root down to its correct location
   * @param {number} i -  swapped node's index
   */
  _heapifyDownUntil(i) {
    let parentIndex = 0;
    let leftIndex = 1;
    let rightIndex = 2;
    let childIndex;

    while (leftIndex < i) {
      childIndex = this._compareChildrenBefore(i, leftIndex, rightIndex);
      if (this._shouldSwap(parentIndex, childIndex)) {
        this._swap(parentIndex, childIndex);
      }
      parentIndex = childIndex;
      leftIndex = this._getLeftChildIndex(parentIndex);
      rightIndex = this._getRightChildIndex(parentIndex);
    }
  }

  /**
   * @public
   * @param {array}
   */
  sort() {
    this._heapify();

    for (let i = this._list.length - 1; i > 0; i -= 1) {
      this._swap(0, i);
      this._heapifyDownUntil(i);
    }

    return this._list;
  }
}

module.exports = HeapSort;
