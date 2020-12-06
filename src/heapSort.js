/**
 * sort-algorithms-js
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

exports.heapSort = ({ list }, { compare, swap }) => {
  /**
   * calculates a parent's index from a child's index
   * @param {number} childIndex
   * @returns {number}
   */
  const getParentIndex = (childIndex) => (
    Math.floor((childIndex - 1) / 2)
  );

  /**
   * calculates the left child's index of a parent's index
   * @param {number} parentIndex
   * @returns {number}
   */
  const getLeftChildIndex = (parentIndex) => (
    (parentIndex * 2) + 1
  );

  /**
   * calculates the right child's index of a parent's index
   * @param {number} parentIndex
   * @returns {number}
   */
  const getRightChildIndex = (parentIndex) => (
    (parentIndex * 2) + 2
  );

  /**
   * @return {boolean}
   */
  const shouldSwap = (i, j) => (
    i >= 0 && j >= 0
    && i < list.length
    && j < list.length
    && compare(list[j], list[i]) > 0
  );

  /**
   * bubbles an element at a position up in the heap
   */
  const heapifyUp = (i) => {
    let childIndex = i;
    let parentIndex = getParentIndex(childIndex);

    while (shouldSwap(parentIndex, childIndex)) {
      swap(parentIndex, childIndex);
      childIndex = parentIndex;
      parentIndex = getParentIndex(childIndex);
    }
  };

  /**
   * converts the array into a heap
   */
  const heapify = () => {
    for (let i = 0; i < list.length; i += 1) {
      heapifyUp(i);
    }
    return list;
  };

  /**
   * @param {number}
   */
  const compareChildrenBefore = (i, leftIndex, rightIndex) => {
    if (shouldSwap(leftIndex, rightIndex) && rightIndex < i) {
      return rightIndex;
    }

    return leftIndex;
  };

  /**
   * pushes the swapped element with root down to its correct location
   * @param {number} i - swapped node's index
   */
  const heapifyDownUntil = (i) => {
    let parentIndex = 0;
    let leftIndex = 1;
    let rightIndex = 2;
    let childIndex;

    while (leftIndex < i) {
      childIndex = compareChildrenBefore(i, leftIndex, rightIndex);

      if (shouldSwap(parentIndex, childIndex)) {
        swap(parentIndex, childIndex);
      }

      parentIndex = childIndex;
      leftIndex = getLeftChildIndex(parentIndex);
      rightIndex = getRightChildIndex(parentIndex);
    }
  };

  heapify();
  for (let i = list.length - 1; i > 0; i -= 1) {
    swap(0, i);
    heapifyDownUntil(i);
  }

  return list;
};
