const validate = require('./validate');

const mergePartitions = (left, right) => {
  let leftIndex = 0;
  let rightIndex = 0;
  let index = 0;
  const merged = [];

  while (leftIndex < left.length || rightIndex < right.length) {
    if (leftIndex === left.length) {
      for (index = rightIndex; index < right.length; index += 1) {
        merged.push(right[rightIndex]);
        rightIndex += 1;
      }
    } else if (rightIndex === right.length) {
      for (index = leftIndex; index < left.length; index += 1) {
        merged.push(left[leftIndex]);
        leftIndex += 1;
      }
    } else if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      merged.push(right[rightIndex]);
      rightIndex += 1;
    }
  }
  return merged;
};

const getMiddle = (start, end) => start + Math.floor((end - start) / 2);

const mergeSort = (list) => {
  validate(list);
  const mergeSortFn = (startIndex, endIndex) => {
    const middleIndex = getMiddle(startIndex, endIndex);
    if (endIndex - startIndex > 0) {
      const leftPartition = mergeSortFn(startIndex, middleIndex);
      const rightPartition = mergeSortFn(middleIndex + 1, endIndex);
      return mergePartitions(leftPartition, rightPartition);
    }
    return [list[startIndex]];
  };
  return mergeSortFn(0, list.length - 1);
};

module.exports = mergeSort;
