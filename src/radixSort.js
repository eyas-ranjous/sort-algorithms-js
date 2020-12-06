/**
 * sort-algorithms-js
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

exports.radixSort = ({ list, order = 'asc', getNumber = ((n) => n) }) => {
  if (order && !['asc', 'desc'].includes(order)) {
    throw new Error('radix sort: order is either "asc" or "desc"');
  }

  if (getNumber && typeof getNumber !== 'function') {
    throw new Error('radix sort: invalid getNumber callback');
  }

  const sortPartition = (numbers, max) => {
    // 0 - 9 buckets
    const buckets = [[], [], [], [], [], [], [], [], [], []];
    let sorted = numbers;

    // sort numbers into buckets starting from least significant digit
    for (let i = 0; i < `${max}`.length; i += 1) {
      for (let j = 0; j < sorted.length; j += 1) {
        const n = Math.abs(getNumber(sorted[j])).toString();
        const digit = n[n.length - 1 - i] || 0;
        buckets[digit].push(sorted[j]);
      }

      let temp = [];
      buckets.forEach((bucket, digit) => {
        temp = temp.concat(bucket);
        buckets[digit] = [];
      });

      sorted = temp;
    }

    return sorted;
  };

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
      if (n > maxPositive) {
        maxPositive = n;
      }
    } else {
      negative.push(list[i]);
      if (n < minNegative) {
        minNegative = n;
      }
    }
  }

  const sortedPositive = sortPartition(positive, maxPositive);
  const sortedNegative = sortPartition(negative, -minNegative);

  // merge sorted numbers
  const sorted = [];
  const first = order === 'asc' ? sortedNegative : sortedPositive;
  const second = order === 'asc' ? sortedPositive : sortedNegative;

  for (let i = first.length - 1; i >= 0; i -= 1) {
    sorted.push(first[i]);
  }

  for (let i = 0; i < second.length; i += 1) {
    sorted.push(second[i]);
  }

  sorted.forEach((n, i) => {
    list[i] = n; // eslint-disable-line no-param-reassign
  });

  return list;
};
