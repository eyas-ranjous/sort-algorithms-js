/**
 * sort-algorithms-js
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

exports.sort = (algorithm, input, compare = (a, b) => (a > b ? 1 : -1)) => {
  const { list } = input;
  if (!Array.isArray(list)) {
    throw new Error('Sort: invalid array');
  }

  if (typeof compare !== 'function') {
    throw new Error('Sort: "compare" must be a function');
  }

  /**
   * check if two elements should be swapped
   * @return {boolean}
   */
  const shouldSwap = (i, j) => (compare(list[i], list[j]) > 0);

  /**
   * swap positions of two elements in the list
   */
  const swap = (i, j) => {
    const temp = list[j];
    list[j] = list[i];
    list[i] = temp;
  };

  return algorithm(input, { shouldSwap, swap, compare });
};
