/**
 * sort-algorithms-js
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

/**
 * @class RadixSort
 */
class RadixSort {
  constructor(list, order) {
    if (!Array.isArray(list)) {
      throw new Error('Sort: invalid array');
    }

    if (order && !(order === 'asc' || order === 'desc')) {
      throw new Error('radix sort: order is either "asc" or "desc"');
    }

    this._list = list;
    this._order = order || 'asc';
  }

  _sortPartition(numbers, max) {
    // 0 - 9 buckets
    const buckets = [[], [], [], [], [], [], [], [], [], []];
    let sorted = numbers;

    // sort numbers into buckets starting from least significant digit
    for (let i = 0; i < max.toString().length; i += 1) {
      for (let j = 0; j < sorted.length; j += 1) {
        const n = sorted[j].toString();
        const digit = n[n.length - 1 - i] || 0;
        buckets[digit].push(sorted[j]);
      }

      const temp = [];
      buckets.forEach((bucket, digit) => {
        bucket.forEach((n) => temp.push(n));
        buckets[digit] = [];
      });

      sorted = temp;
    }

    return sorted;
  }

  /**
   * @public
   * @return {array}
   */
  sort() {
    const positive = [];
    const negative = [];
    let maxPositive = -Infinity;
    let minNegative = Infinity;

    this._list.forEach((n) => {
      if (Number.isNaN(+n)) {
        throw new Error(`radix sort: invalid numeric value: ${n}`);
      }
      if (n >= 0) {
        positive.push(n);
        if (n > maxPositive) {
          maxPositive = n;
        }
      } else {
        negative.push(-n);
        if (n < minNegative) {
          minNegative = n;
        }
      }
    });

    const sortedPositive = this._sortPartition(positive, maxPositive);
    const sortedNegative = this._sortPartition(negative, -minNegative);

    // merge sorted numbers
    const sorted = [];
    if (this._order === 'asc') {
      for (let i = sortedNegative.length - 1; i >= 0; i -= 1) {
        sorted.push(-sortedNegative[i]);
      }
      for (let i = 0; i < sortedPositive.length; i += 1) {
        sorted.push(sortedPositive[i]);
      }
    } else {
      for (let i = sortedPositive.length - 1; i >= 0; i -= 1) {
        sorted.push(sortedPositive[i]);
      }
      for (let i = 0; i < sortedNegative.length; i += 1) {
        sorted.push(-sortedNegative[i]);
      }
    }

    return sorted;
  }
}

module.exports = RadixSort;
