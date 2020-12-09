/**
 * sort-algorithms-js
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

exports.insertionSort = ({ list }, { shouldSwap, swap }) => {
  for (let i = 1; i < list.length; i += 1) {
    let insertionIndex = i;

    for (let j = i - 1; j >= 0; j -= 1) {
      if (shouldSwap(j, insertionIndex)) {
        swap(j, insertionIndex);
        insertionIndex = j;
      }
    }
  }

  return list;
};
