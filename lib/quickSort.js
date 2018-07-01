/**
 * sort-algorithms-js/quickSort
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const swap = require('./swap');
const validate = require('./validate');

const quickSort = (list) => {
  validate(list);
  const sorted = list.slice(0);

  const quickSortFn = (startIndex, endIndex) => {
    const pivotIndex = startIndex;
    let lowIndex = startIndex;
    let highIndex = endIndex;

    while (lowIndex <= highIndex) {
      while (sorted[lowIndex] < sorted[pivotIndex] && lowIndex < endIndex) {
        lowIndex += 1;
      }
      while (sorted[highIndex] > sorted[pivotIndex]) {
        highIndex -= 1;
      }
      if (lowIndex <= highIndex) {
        swap(sorted, lowIndex, highIndex);
        lowIndex += 1;
        highIndex -= 1;
      }
    }

    if (startIndex < highIndex) {
      quickSortFn(startIndex, highIndex);
    }
    if (lowIndex < endIndex) {
      quickSortFn(lowIndex, endIndex);
    }

    return sorted;
  };
  return quickSortFn(0, list.length - 1);
};

module.exports = quickSort;
