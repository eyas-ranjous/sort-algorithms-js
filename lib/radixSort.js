/**
 * sort-algorithms-js/radixSort
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const validate = require('./validate');

const sort = (numbers, max) => {
  const buckets = [[], [], [], [], [], [], [], [], [], []]; // 0 - 9 buckets
  const maxLen = max.toString().length;
  let sorted = numbers;

  // rebuild the sorted list from the buckets
  const buildSortedList = () => {
    const sortedList = [];
    buckets.forEach((queue, digit) => {
      queue.forEach(n => sortedList.push(n));
      buckets[digit] = [];
    });
    return sortedList;
  };

  for (let i = 0; i < maxLen; i += 1) {
    // sort numbers into buckets starting from least significant digit
    sorted.forEach((n) => {
      const nStr = n.toString();
      const digit = nStr[nStr.length - 1 - i] || 0;
      buckets[digit].push(n);
    });
    sorted = buildSortedList();
  }
  return sorted;
};

const radixSort = (list) => {
  validate(list);
  if (list.length <= 1) {
    return list;
  }
  const numbers = { positive: [], negative: [] };
  let maxPositive = list[0];
  let minNegative = list[0];
  list.forEach((n) => {
    if (Number.isNaN(+n)) {
      throw new Error(`cannot radix sort non-numeric value: ${n}`);
    }
    if (n >= 0) {
      numbers.positive.push(n);
      if (n > maxPositive) {
        maxPositive = n;
      }
    } else {
      numbers.negative.push(Math.abs(n));
      if (n < minNegative) {
        minNegative = n;
      }
    }
  });
  const sortedPositive = sort(numbers.positive, maxPositive);
  const sortedNegative = sort(numbers.negative, Math.abs(minNegative));
  // merge sorted numbers
  const sorted = [];
  for (let i = sortedNegative.length - 1; i >= 0; i -= 1) {
    sorted.push(-sortedNegative[i]);
  }
  sortedPositive.forEach(n => sorted.push(+n));
  return sorted;
};

module.exports = radixSort;
