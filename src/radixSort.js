/**
 * sort-algorithms-js
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

/**
 * @class RadixSort
 */
class RadixSort {
  constructor(list, order, getNumber) {
    if (!Array.isArray(list)) {
      throw new Error('Sort: invalid array');
    }

    if (order && !(order === 'asc' || order === 'desc')) {
      throw new Error('radix sort: order is either "asc" or "desc"');
    }

    if (getNumber && typeof getNumber !== 'function') {
      throw new Error('radix sort: invalid getNumber callback');
    }

    this._list = list;
    this._order = order || 'asc';
    this._getNumber = getNumber || ((n) => n);
  }

  _sortPartition(numbers, max) {
    // 0 - 9 buckets
    const buckets = [[], [], [], [], [], [], [], [], [], []];
    let sorted = numbers;

    // sort numbers into buckets starting from least significant digit
    for (let i = 0; i < max.toString().length; i += 1) {
      for (let j = 0; j < sorted.length; j += 1) {
        const n = Math.abs(this._getNumber(sorted[j])).toString();
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

    for (let i = 0; i < this._list.length; i += 1) {
      const n = this._getNumber(this._list[i]);
      if (Number.isNaN(+n)) {
        throw new Error(`radix sort: invalid numeric value: ${n}`);
      }
      if (n >= 0) {
        positive.push(this._list[i]);
        if (n > maxPositive) {
          maxPositive = n;
        }
      } else {
        negative.push(this._list[i]);
        if (n < minNegative) {
          minNegative = n;
        }
      }
    }

    const sortedPositive = this._sortPartition(positive, maxPositive);
    const sortedNegative = this._sortPartition(negative, -minNegative);

    // merge sorted numbers
    const sorted = [];
    const first = this._order === 'asc' ? sortedNegative : sortedPositive;
    const second = this._order === 'asc' ? sortedPositive : sortedNegative;

    for (let i = first.length - 1; i >= 0; i -= 1) {
      sorted.push(first[i]);
    }
    for (let i = 0; i < second.length; i += 1) {
      sorted.push(second[i]);
    }

    sorted.forEach((n, i) => {
      this._list[i] = n;
    });

    return this._list;
  }
}

module.exports = RadixSort;
