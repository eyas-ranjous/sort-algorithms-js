/**
 * sort-algorithms-js
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

exports.bubbleSort = ({ list }, { shouldSwap, swap }) => {
  let upperIndex = list.length - 1;

  while (upperIndex > 0) {
    let swapIndex = 0;

    for (let i = 0; i < upperIndex; i += 1) {
      if (shouldSwap(i, i + 1)) {
        swap(i, i + 1);
        swapIndex = i;
      }
    }

    upperIndex = swapIndex;
  }

  return list;
};
