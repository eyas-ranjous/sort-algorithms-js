/**
 * sort-algorithms-js/selectionSort
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const swap = require('./swap');
const validate = require('./validate');

const selectionSort = (list) => {
  validate(list);
  const sorted = list.slice(0);
  let minIndex = 0;
  for (let i = 0; i < sorted.length; i += 1) {
    minIndex = i;
    for (let j = i + 1; j < sorted.length; j += 1) {
      if (sorted[j] < sorted[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swap(sorted, i, minIndex);
    }
  }
  return sorted;
};

module.exports = selectionSort;
