/**
 * sort-algorithms-js
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

exports.selectionSort = ({ list }, { shouldSwap, swap }) => {
  for (let i = 0; i < list.length - 1; i += 1) {
    let selectedIndex = i;

    for (let j = i + 1; j < list.length; j += 1) {
      if (shouldSwap(selectedIndex, j)) {
        selectedIndex = j;
      }
    }

    if (selectedIndex !== i) {
      swap(selectedIndex, i);
    }
  }
  return list;
};
