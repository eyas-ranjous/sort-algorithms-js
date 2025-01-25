/**
 * sort-algorithms-js
 * Quick Sort Implementation
 * Average O(n log n) time complexity
 */

 exports.quickSort = ({ list }, { shouldSwap, swap }) => {
  /**
   * Recursively partitions the array around a pivot.
   * @param {number} startIndex
   * @param {number} endIndex
   * @returns {T[]} sorted portion
   */
  const sortRecursively = (startIndex = 0, endIndex = list.length - 1) => {
    const pivotIndex = startIndex;
    let lowerIndex = startIndex;
    let higherIndex = endIndex;

    while (lowerIndex <= higherIndex) {
      // move forward while items are on the correct side
      while (shouldSwap(pivotIndex, lowerIndex) && lowerIndex < endIndex) {
        lowerIndex += 1;
      }

      // move backward while items are on the correct side
      while (!shouldSwap(pivotIndex, higherIndex) && higherIndex > startIndex) {
        higherIndex -= 1;
      }

      // swap if crossing
      if (lowerIndex <= higherIndex) {
        swap(lowerIndex, higherIndex);
        lowerIndex += 1;
        higherIndex -= 1;
      }
    }

    // sort sub-partitions
    if (startIndex < higherIndex) {
      sortRecursively(startIndex, higherIndex);
    }

    if (lowerIndex < endIndex) {
      sortRecursively(lowerIndex, endIndex);
    }

    return list;
  };

  return sortRecursively();
};
