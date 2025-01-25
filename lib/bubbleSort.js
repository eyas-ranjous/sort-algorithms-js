/**
 * sort-algorithms-js
 * Bubble Sort Implementation
 * O(n^2) average time complexity
 */

 exports.bubbleSort = ({ list }, { shouldSwap, swap }) => {
  let upperIndex = list.length - 1;

  while (upperIndex > 0) {
    let lastSwapIndex = 0;

    for (let i = 0; i < upperIndex; i += 1) {
      if (shouldSwap(i, i + 1)) {
        swap(i, i + 1);
        lastSwapIndex = i;
      }
    }

    upperIndex = lastSwapIndex;
  }

  return list;
};
