/**
 * sort-algorithms-js
 * Insertion Sort Implementation
 * O(n^2) average time complexity
 */

 exports.insertionSort = ({ list }, { shouldSwap, swap }) => {
  for (let i = 1; i < list.length; i += 1) {
    let insertionIndex = i;

    for (let j = i - 1; j >= 0; j -= 1) {
      if (shouldSwap(j, insertionIndex)) {
        swap(j, insertionIndex);
        insertionIndex = j;
      } else {
        // Once we find a position where it's no longer necessary to swap,
        // we can break early for insertion sort (optional optimization).
        break;
      }
    }
  }

  return list;
};
