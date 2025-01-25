/**
 * sort-algorithms-js
 * A helper module that orchestrates sorting with a chosen algorithm
 * @copyright 2020
 * @license MIT
 */

/**
 * Sorts an array using a chosen algorithm, and a compare function.
 * @param {Function} algorithm - The sorting function to use.
 * @param {Object} input - An object containing { list: T[] } plus optional fields for specialized sorts.
 * @param {Function} [compare] - A function that compares two values. Should return > 0 if a > b, < 0 if a < b, or 0 if equal.
 * @returns {T[]} The sorted array (in-place).
 */
 function sort(algorithm, input, compare = (a, b) => (a > b ? 1 : -1)) {
  const { list } = input;
  if (!Array.isArray(list)) {
    // revert to the old text
    throw new Error('Sort: invalid array');
  }
  
  if (typeof compare !== 'function') {
    throw new Error('Sort: "compare" must be a function');
  }

  /**
   * Checks if two elements should be swapped.
   * @param {number} i - First index
   * @param {number} j - Second index
   * @returns {boolean} True if list[i] > list[j], based on compare.
   */
  const shouldSwap = (i, j) => compare(list[i], list[j]) > 0;

  /**
   * Swaps two elements in the list (in-place).
   * @param {number} i - First index
   * @param {number} j - Second index
   */
  const swap = (i, j) => {
    const temp = list[j];
    list[j] = list[i];
    list[i] = temp;
  };

  return algorithm(input, { shouldSwap, swap, compare });
}

module.exports = { sort };
