/**
 * sort-algorithms-js
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

exports.quickSort = ({ list }, { shouldSwap, swap }) => {
  const sortRecursively = (startIndex = 0, endIndex = list.length - 1) => {
    const pivotIndex = startIndex;
    let lowerIndex = startIndex;
    let higherIndex = endIndex;

    while (lowerIndex <= higherIndex) {
      while (shouldSwap(pivotIndex, lowerIndex) && lowerIndex < endIndex) {
        lowerIndex += 1;
      }

      while (!shouldSwap(pivotIndex, higherIndex) && higherIndex > startIndex) {
        higherIndex -= 1;
      }

      if (lowerIndex <= higherIndex) {
        swap(lowerIndex, higherIndex);
        lowerIndex += 1;
        higherIndex -= 1;
      }
    }

    if (startIndex < higherIndex) {
      sortRecursively(startIndex, higherIndex);
    }

    if (lowerIndex < endIndex) {
      sortRecursively(lowerIndex, endIndex);
    }

    return list;
  };

  return sortRecursively();
};
