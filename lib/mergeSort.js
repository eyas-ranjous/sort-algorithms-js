/**
 * sort-algorithms-js
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

exports.mergeSort = ({ list }, { shouldSwap }) => {
  /**
   * @return {number}
   */
  const getMiddleIndex = (startIndex, endIndex) => (
    startIndex + Math.floor((endIndex - startIndex) / 2)
  );

  /**
   * merges two sorted partitions using a temporary array
   * @return {array} the start and end of a partition
   */
  const partitionAndSort = (startIndex = 0, endIndex = list.length - 1) => {
    if (endIndex - startIndex <= 0) return [startIndex, startIndex];

    const middleIndex = getMiddleIndex(startIndex, endIndex);
    const leftPartition = partitionAndSort(startIndex, middleIndex);
    const rightPartition = partitionAndSort(middleIndex + 1, endIndex);

    const [leftStartIndex, leftEndIndex] = leftPartition;
    const [rightStartIndex, rightEndIndex] = rightPartition;

    const sorted = [];
    let leftIndex = leftStartIndex;
    let rightIndex = rightStartIndex;

    while (leftIndex <= leftEndIndex || rightIndex <= rightEndIndex) {
      if (rightIndex > rightEndIndex) {
        sorted.push(list[leftIndex]);
        leftIndex += 1;
      } else if (leftIndex > leftEndIndex) {
        sorted.push(list[rightIndex]);
        rightIndex += 1;
      } else if (shouldSwap(leftIndex, rightIndex)) {
        sorted.push(list[rightIndex]);
        rightIndex += 1;
      } else {
        sorted.push(list[leftIndex]);
        leftIndex += 1;
      }
    }

    // update list segment with sorted partition
    let j = 0;
    for (let i = leftStartIndex; i <= rightEndIndex; i += 1) {
      list[i] = sorted[j]; // eslint-disable-line no-param-reassign
      j += 1;
    }

    return [leftStartIndex, rightEndIndex]; // return sorted partition pointers
  };

  partitionAndSort();
  return list;
};
