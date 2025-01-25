/**
 * sort-algorithms-js
 * Radix Sort Implementation
 * O(kn) average time complexity (k = number of digits)
 */

/**
 * Radix sort specifically for numeric values.
 * @param {Object} input - { list: number[], order?: 'asc'|'desc', getNumber?: (value) => number }
 * @returns {number[]} The sorted list in-place
 */
 exports.radixSort = ({ list, order = 'asc', getNumber = (n) => n }) => {
  if (!['asc', 'desc'].includes(order)) {
    throw new Error('radix sort: order is either "asc" or "desc"');
  }
  
  if (typeof getNumber !== 'function') {
    throw new Error('radix sort: invalid getNumber callback');
  }

  /**
   * Sorts numbers into buckets by digit, starting from the least significant digit.
   * @param {number[]} numbers - An array of numbers
   * @param {number} max - The maximum absolute value
   * @returns {number[]} A sorted array by digit place
   */
  const sortPartition = (numbers, max) => {
    let sorted = numbers;
    const maxDigitCount = `${max}`.length;
    const buckets = [[], [], [], [], [], [], [], [], [], []]; // 0-9

    for (let i = 0; i < maxDigitCount; i += 1) {
      // distribute into buckets
      for (let j = 0; j < sorted.length; j += 1) {
        const numStr = Math.abs(getNumber(sorted[j])).toString();
        const digit = numStr[numStr.length - 1 - i] || '0';
        buckets[digit].push(sorted[j]);
      }

      // gather back into a single array
      let temp = [];
      for (let b = 0; b < buckets.length; b += 1) {
        temp = temp.concat(buckets[b]);
        buckets[b] = [];
      }
      sorted = temp;
    }
    return sorted;
  };

  // separate negative and positive
  const positive = [];
  const negative = [];
  let maxPositive = -Infinity;
  let minNegative = Infinity;

  for (let i = 0; i < list.length; i += 1) {
    const n = getNumber(list[i]);

    if (Number.isNaN(+n)) {
      throw new Error(`radix sort: invalid numeric value: ${n}`);
    }

    if (n >= 0) {
      positive.push(list[i]);
      if (n > maxPositive) maxPositive = n;
    } else {
      negative.push(list[i]);
      if (n < minNegative) minNegative = n;
    }
  }

  const sortedPositive = (positive.length > 0)
    ? sortPartition(positive, maxPositive)
    : [];

  const sortedNegative = (negative.length > 0)
    ? sortPartition(negative, -minNegative)
    : [];

  // merge results; negative sorted in descending digit order
  const sorted = [];
  const first = (order === 'asc') ? sortedNegative : sortedPositive;
  const second = (order === 'asc') ? sortedPositive : sortedNegative;

  // Reverse 'first' array to correct negative order
  for (let i = first.length - 1; i >= 0; i -= 1) {
    sorted.push(first[i]);
  }

  // then append 'second' array
  for (let i = 0; i < second.length; i += 1) {
    sorted.push(second[i]);
  }

  // in-place update
  for (let i = 0; i < sorted.length; i += 1) {
    list[i] = sorted[i];
  }

  return list;
};
