/**
 * sort-algorithms-js
 * Merge Sort Implementation
 * O(n log n) average time complexity
 */

 exports.mergeSort = ({ list }, { shouldSwap }) => {
  /**
   * Returns the middle index of a range.
   * @param {number} start
   * @param {number} end
   * @returns {number}
   */
  const getMiddleIndex = (start, end) => (
    start + Math.floor((end - start) / 2)
  );

  /**
   * Recursively partitions and merges the list.
   * @param {number} startIndex
   * @param {number} endIndex
   * @returns {[number, number]} The [start, end] of the sorted partition
   */
  const partitionAndSort = (startIndex = 0, endIndex = list.length - 1) => {
    if (endIndex - startIndex <= 0) {
      return [startIndex, startIndex];
    }

    const middleIndex = getMiddleIndex(startIndex, endIndex);
    const [leftStart, leftEnd] = partitionAndSort(startIndex, middleIndex);
    const [rightStart, rightEnd] = partitionAndSort(middleIndex + 1, endIndex);

    const merged = [];
    let leftIndex = leftStart;
    let rightIndex = rightStart;

    while (leftIndex <= leftEnd || rightIndex <= rightEnd) {
      if (rightIndex > rightEnd) {
        merged.push(list[leftIndex]);
        leftIndex += 1;
      } else if (leftIndex > leftEnd) {
        merged.push(list[rightIndex]);
        rightIndex += 1;
      } else if (shouldSwap(leftIndex, rightIndex)) {
        merged.push(list[rightIndex]);
        rightIndex += 1;
      } else {
        merged.push(list[leftIndex]);
        leftIndex += 1;
      }
    }

    // in-place update
    let j = 0;
    for (let i = leftStart; i <= rightEnd; i += 1) {
      list[i] = merged[j];
      j += 1;
    }

    return [leftStart, rightEnd];
  };

  partitionAndSort();
  return list;
};
