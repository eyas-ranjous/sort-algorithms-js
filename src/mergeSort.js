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
    if (endIndex - startIndex <= 0) return [startIndex, startIndex + 1];

    const middleIndex = getMiddleIndex(startIndex, endIndex);
    const leftPartition = partitionAndSort(startIndex, middleIndex);
    const rightPartition = partitionAndSort(middleIndex + 1, endIndex);

    const [leftStart, leftEnd] = leftPartition;
    const [rightStart, rightEnd] = rightPartition;

    const merged = [];
    let leftIndex = leftStart;
    let rightIndex = rightStart;

    while (leftIndex < leftEnd || rightIndex < rightEnd) {
      if (rightIndex === rightEnd) {
        merged.push(list[leftIndex]);
        leftIndex += 1;
      } else if (leftIndex === leftEnd) {
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

    // update list segment with merged partition
    let j = 0;
    for (let i = leftStart; i < rightEnd; i += 1) {
      list[i] = merged[j]; // eslint-disable-line no-param-reassign
      j += 1;
    }

    return [leftStart, rightEnd];
  };

  partitionAndSort();
  return list;
};
