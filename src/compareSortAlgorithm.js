/**
 * sort-algorithms-js
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

/**
 * @abstract
 * @class CompareSortAlgorithm
 */
class CompareSortAlgorithm {
  constructor(list, compare) {
    if (!Array.isArray(list)) {
      throw new Error('Sort: invalid array');
    }
    this._list = list;
    if (typeof compare === 'function') {
      this._compare = compare;
    } else {
      this._compare = (a, b) => (a > b ? 1 : -1);
    }
  }

  /**
   * @protected
   * @return {boolean}
   */
  _shouldSwap(i, j) {
    return this._compare(this._list[i], this._list[j]) > 0;
  }

  /**
   * @protected
   */
  _swap(i, j) {
    const temp = this._list[j];
    this._list[j] = this._list[i];
    this._list[i] = temp;
  }
}

module.exports = CompareSortAlgorithm;
