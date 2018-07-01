/**
 * sort-algorithms-js/insertionSort
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const swap = require('./swap');
const validate = require('./validate');

const insertionSort = (list) => {
  validate(list);
  const sorted = list.slice(0);
  let insertionIndex = 0;
  for (let i = 1; i < sorted.length; i += 1) {
    insertionIndex = i;
    for (let j = i - 1; j >= 0; j -= 1) {
      if (sorted[j] > sorted[insertionIndex]) {
        swap(sorted, j, insertionIndex);
        insertionIndex = j;
      }
    }
  }
  return sorted;
};

module.exports = insertionSort;
