/**
 * sort-algorithms-js
 * Heap Sort Implementation
 * O(n log n) average time complexity
 */

 exports.heapSort = ({ list }, { compare, swap }) => {
  /**
   * @param {number} childIndex
   * @returns {number} The parent's index
   */
  const getParentIndex = (childIndex) => (
    Math.floor((childIndex - 1) / 2)
  );

  /**
   * @param {number} parentIndex
   * @returns {number} The left child's index
   */
  const getLeftChildIndex = (parentIndex) => (
    (parentIndex * 2) + 1
  );

  /**
   * @param {number} parentIndex
   * @returns {number} The right child's index
   */
  const getRightChildIndex = (parentIndex) => (
    (parentIndex * 2) + 2
  );

  /**
   * Checks if we should swap list[i] with list[j].
   * Uses the `compare` function from the parent scope.
   * @param {number} i
   * @param {number} j
   * @returns {boolean}
   */
  const shouldSwap = (i, j) => (
    i >= 0 && j >= 0
    && i < list.length
    && j < list.length
    && compare(list[j], list[i]) > 0
  );

  /**
   * Bubble the item at index i up through the heap.
   * @param {number} i
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
   * Turns the array into a heap.
   */
  const buildHeap = () => {
    for (let i = 0; i < list.length; i += 1) {
      heapifyUp(i);
    }
  };

  /**
   * Compare the left vs. right child before i (upper bound).
   * @param {number} i - The upper bound for valid indexing
   * @param {number} leftIndex
   * @param {number} rightIndex
   * @returns {number} The index of the child that should bubble up
   */
  const compareChildrenBefore = (i, leftIndex, rightIndex) => {
    if (rightIndex < i && shouldSwap(leftIndex, rightIndex)) {
      return rightIndex;
    }
    return leftIndex;
  };

  /**
   * Pushes the swapped root element down to its correct position.
   * @param {number} i - The upper bound index
   */
  const heapifyDownUntil = (i) => {
    let parentIndex = 0;
    let leftIndex = getLeftChildIndex(parentIndex);
    let rightIndex = getRightChildIndex(parentIndex);

    while (leftIndex < i) {
      const childIndex = compareChildrenBefore(i, leftIndex, rightIndex);

      if (shouldSwap(parentIndex, childIndex)) {
        swap(parentIndex, childIndex);
      }

      parentIndex = childIndex;
      leftIndex = getLeftChildIndex(parentIndex);
      rightIndex = getRightChildIndex(parentIndex);
    }
  };

  buildHeap();

  // repeatedly swap the first (max) with the last in unsorted portion,
  // then restore heap property for the unsorted portion
  for (let i = list.length - 1; i > 0; i -= 1) {
    swap(0, i);
    heapifyDownUntil(i);
  }

  return list;
};
